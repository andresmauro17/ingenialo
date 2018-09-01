from django.conf.urls import url
from django.urls import path

from .views import ProductDetailView

urlpatterns = [
    path('<int:pk>/', ProductDetailView.as_view(), name='detail'),
]