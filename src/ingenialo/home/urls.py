from django.conf.urls import url
from django.urls import path

from .views import home_page, front

urlpatterns = [
    path('', home_page, name='home'),
    path('front/', front, name='front'),
]