from django.contrib import admin


from ..models import Cart
from ingenialo.products.admin import ProductInline

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    # inlines = [
    #     ProductInline,
    # ]
    list_display = ['__str__']
    list_editable = []
    ordering = ['timestamp']
    save_as = True
