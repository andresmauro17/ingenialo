from django.urls import path

# Views local imports
from .views import add_product

urlpatterns = [
    path('add', add_product),
]