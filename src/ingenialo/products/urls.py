from django.conf.urls import url
from django.urls import path

from .views import ProductTemplateView

urlpatterns = [
    path('<int:pk>/', ProductTemplateView.as_view(), name='detail'),
]