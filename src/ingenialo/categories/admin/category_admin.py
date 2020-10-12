from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from ..models import Category
from .category_resource import CategoryModelResource


@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = CategoryModelResource
    list_display = ['__str__', 'name', 'description', 'parent', 'created_at', 'updated_at']
    list_editable = ['parent']
    ordering = ['created_at']


