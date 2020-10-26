from django.contrib import admin


from ..models import Cart
from .cart_product_admin import CartProductInlineAdmin

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    inlines = [
        CartProductInlineAdmin,
    ]
    list_display = ['__str__', 'user', 'subtotal', 'total', 'timestamp', 'updated']
    list_editable = []
    ordering = ['timestamp']
    save_as = True


