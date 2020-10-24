# python imports
import uuid

# Django imports
from django.db import models
from django.conf import settings
from django.db.models.signals import pre_save

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

    def __str__(self):
        return str(self.cart_id)

def set_cart_id(sender, instance, *args, **kwargs):
    if not instance.cart_id:
        instance.cart_id = str(uuid.uuid4())

pre_save.connect(set_cart_id, sender=Cart)