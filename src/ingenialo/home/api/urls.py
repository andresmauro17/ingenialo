from django.urls import path

# Views local imports
from .views import hero_list_view

urlpatterns = [
    path('hero/', hero_list_view),
]