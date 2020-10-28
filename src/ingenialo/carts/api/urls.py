from django.urls import path

# Views local imports
from .views import add_product
from .views import cart

urlpatterns = [
    path('', cart),
    path('add', add_product),
]