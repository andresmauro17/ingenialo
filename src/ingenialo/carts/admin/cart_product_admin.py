from django.contrib import admin

from ..models import Cart

class CartProductInlineAdmin(admin.TabularInline):
    model = Cart.products.through
    extra = 0
    can_delete = True
    show_change_link = True
