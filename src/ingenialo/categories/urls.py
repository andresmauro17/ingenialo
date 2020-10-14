from django.conf.urls import url
from django.urls import include, path

from .views import CategoriesTemplateView

urlpatterns = [
    path('categories/', CategoriesTemplateView.as_view(), name='categories'),
    path('api/categories/', include('ingenialo.categories.api.urls')),
]