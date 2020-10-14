from django.urls import path

# Views local imports
from .views import categories_list_view

urlpatterns = [
    path('', categories_list_view),
    # path('<int:product_id>/',products_detail_view)
]