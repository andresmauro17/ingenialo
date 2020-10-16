from django.conf.urls import url
from django.urls import include, path

from .views import CategoriesTemplateView
from .views import CategoryTemplateView

urlpatterns = [
    path('categories/', CategoriesTemplateView.as_view(), name='categories'),
    path('categories/<int:category_id>/', CategoryTemplateView.as_view(), name='detail'),
    path('api/categories/', include('ingenialo.categories.api.urls')),
]