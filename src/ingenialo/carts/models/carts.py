# python imports
import uuid
import decimal

# Django imports
from django.db import models
from django.conf import settings
from django.db.models.signals import pre_save
from django.db.models.signals import m2m_changed

# Local imports
from ingenialo.products.models import Product

User = settings.AUTH_USER_MODEL

class Cart(models.Model):
    cart_id     = models.CharField(max_length=50, null=False, blank=False, unique=True)
    user        = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    products    = models.ManyToManyField(Product, through='CartProducts')
    subtotal    = models.DecimalField(default=0.00, max_digits=65, decimal_places=2)
    total       = models.DecimalField(default=0.00, max_digits=65, decimal_places=2)
    updated     = models.DateTimeField(auto_now=True)
    timestamp   = models.DateTimeField(auto_now_add=True)

    FEE = 0.19 # 0.19%

    def update_totals(self):
        self.update_subtotal()
        self.update_total()
    
    def update_subtotal(self):
        self.subtotal = sum([
            cp.quantity * cp.product.price for cp in self.products_related()
         ])
        self.save() 
    
    def update_total(self):
        self.total = self.subtotal + (self.subtotal * decimal.Decimal(Cart.FEE))
        self.save()

    def products_related(self):
        return self.cartproducts_set.select_related('product')

    def __str__(self):
        return str(self.cart_id)

def set_cart_id(sender, instance, *args, **kwargs):
    if not instance.cart_id:
        instance.cart_id = str(uuid.uuid4())

pre_save.connect(set_cart_id, sender=Cart)
