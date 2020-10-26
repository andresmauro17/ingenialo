from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.db.models.signals import m2m_changed

from ingenialo.products.models import Product
from .carts import Cart



User = settings.AUTH_USER_MODEL


class CartProductsManager(models.Manager):
    def create_or_update_quantity(self, cart, product, quantity=1):
        object, created =self.get_or_create(cart=cart, product=product)

        if not created:
            quantity = object.quantity + quantity
        
        object.update_quantity(quantity)
        
        return object

class CartProducts(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    updated     = models.DateTimeField(auto_now=True)
    timestamp   = models.DateTimeField(auto_now_add=True)

    objects = CartProductsManager()

    def update_quantity(self, quantity=1):
        self.quantity = quantity
        self.save()

    def __str__(self):
        return str(self.id)

def post_save_update_totals(sender, instance, *args, **kwargs):
    instance.cart.update_totals()

def update_totals(sender, instance, action, *args, **kwargs):
    if action == "post_add" or action == "post_remove" or action == "post_clear":
        instance.update_totals()

post_save.connect(post_save_update_totals, sender=CartProducts)
m2m_changed.connect(update_totals, sender=Cart.products.through)
