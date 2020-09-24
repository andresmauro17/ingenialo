from django.urls import path

# Views local imports
from .views import products_list_view,products_detail_view

urlpatterns = [
    path('', products_list_view),
    path('<int:product_id>/',products_detail_view)
]