from django.urls import path

# Views local imports
from .views import hero_list_view, appSettingsApiView

urlpatterns = [
    path('app-settings/', appSettingsApiView.as_view()),
    path('hero/', hero_list_view),
]