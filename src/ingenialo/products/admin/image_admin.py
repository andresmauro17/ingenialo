from django.contrib import admin

from ..models import Image

class ImageInline(admin.StackedInline):
    model = Image
    extra = 0
    can_delete = True
    show_change_link = True