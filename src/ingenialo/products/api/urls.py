from django.urls import path

# Views local imports
from .views import products_list_view

urlpatterns = [
    path('', products_list_view),
]