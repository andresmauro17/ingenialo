from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from ..models import Image
from .image_resource import ImageModelResource

class ImageInline(admin.StackedInline):
    model = Image
    extra = 0
    can_delete = True
    show_change_link = True

@admin.register(Image)
class ImageAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = ImageModelResource
    list_display = ['__str__', 'product', 'image', 'active', 'timestamp', 'updated_at']
    list_editable = []
    ordering = ['timestamp']
    save_as = True

