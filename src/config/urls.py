"""ingenialo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include,path

from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import TemplateView

urlpatterns = [
    # path('testing_react/', TemplateView.as_view(template_name='react/react.html')),
    path('', include('ingenialo.home.urls'),name='home'),
    path('', include('ingenialo.account.urls'),name='account'),
    path('producto/', include('ingenialo.products.urls'),name='products'),
    path('admin/', admin.site.urls, name='admin'),
]

if settings.DEBUG:
    # static and urls
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # debug toolbar urls
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns


# 'django.contrib.staticfiles' app only work in debug mode. this code is for set the static and media url
# https://docs.djangoproject.com/en/2.1/ref/views/#django.views.static.serve

if settings.LOCAL_CDN:
    from django.urls import re_path
    from django.views.static import serve
    
    urlpatterns += [
        re_path(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
        re_path(r'^static/(?P<path>.*)$', serve, {
            'document_root': settings.STATIC_ROOT,
        }),
    ]