from django.conf.urls import url
from django.urls import path

from .views import home_page, front, vue

urlpatterns = [
    path('', home_page, name='home'),
    path('front/', front, name='front'),
    path('vue/', vue, name='vue'),
]