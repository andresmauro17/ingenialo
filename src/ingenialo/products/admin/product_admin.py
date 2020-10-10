from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from ..models import Product
from .image_admin import ImageInline
from .product_resource import ProductModelResource

@admin.register(Product)
class ProductAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = ProductModelResource
    inlines = [
        ImageInline,
    ]
    list_display = ['__str__', 'title', 'price', 'quantity', 'featured', 'active', 'timestamp']
    list_editable = []
    ordering = ['timestamp']
    save_as = True
