from django.contrib import admin

from .models import Hero

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ['id','__str__', 'legend','is_active','position', 'image','created_at','updated_at']
    list_editable = ['is_active','position']
    ordering = ['id']