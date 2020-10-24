from django.conf.urls import url
from django.urls import include, path

from .views import cart

urlpatterns = [
    path('cart', cart, name='cart'),
    # path('api/products/', include('ingenialo.products.api.urls')),
]