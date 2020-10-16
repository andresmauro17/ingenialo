from .base import *

# Base
DEBUG = True

# SECURITY
SECRET_KEY = os.getenv('INGENIALO_SECRET_KEY')
ALLOWED_HOSTS = [
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
]

# Django debug toolbar
INSTALLED_APPS += (
    'debug_toolbar',
)

MIDDLEWARE += (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)

INTERNAL_IPS = [
    '127.0.0.1',
]

#Rest Framework
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ]
}



# Statics

# LOCAL_CDN is a variable that is True for show statics from static_cdn folder
LOCAL_CDN = False 

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,"ingenialo-ui","src","assets"),
]

# Webpack loader
INSTALLED_APPS += (
    'webpack_loader',
)

# django-extensions
INSTALLED_APPS += ['django_extensions']  # noqa F405

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, 'ingenialo-ui/webpack-stats.json'),
    }
}

