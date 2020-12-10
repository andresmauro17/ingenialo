from django.urls import path

# Views local imports
from .views import add_product
from .views import cart
from .views import remove_product

urlpatterns = [
    path('', cart),
    path('add', add_product),
    path('product/<int:id>/', remove_product),
]