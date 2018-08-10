from django.contrib import admin

from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'title', 'price', 'quantity', 'featured', 'active', 'timestamp']
    list_editable = []
    ordering = ['timestamp']
