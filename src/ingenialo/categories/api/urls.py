from django.urls import path

# Views local imports
from .views import categories_list_view
from .views import category_detail_view

urlpatterns = [
    path('', categories_list_view),
    path('<int:category_id>/',category_detail_view)
]