from django.conf.urls import url
from django.urls import include, path

from .views import ProductTemplateView

urlpatterns = [
    path('products/<int:pk>/', ProductTemplateView.as_view(), name='detail'),
    path('api/products/', include('ingenialo.products.api.urls')),
]