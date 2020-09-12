# Django imports 
from django.conf.urls import url
from django.urls import include,path

# Views local imports
from .views import home_page, front

urlpatterns = [
    path('', home_page, name='home'),
    path('front/', front, name='front'),
    path('api/home/', include('ingenialo.home.api.urls')),
]