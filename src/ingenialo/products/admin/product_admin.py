from django.contrib import admin

from ..models import Product
from .image_admin import ImageInline

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ImageInline,
    ]
    list_display = ['__str__', 'title', 'price', 'quantity', 'featured', 'active', 'timestamp']
    list_editable = []
    ordering = ['timestamp']
    save_as = True
