from django.contrib import admin
from .models import Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'name', 'description', 'parent', 'created_at', 'updated_at']
    list_editable = ['parent']
    ordering = ['created_at']