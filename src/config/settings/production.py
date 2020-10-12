"""Production settings."""

from .base import *  # NOQA

# security
SECRET_KEY = os.getenv('INGENIALO_SECRET_KEY')
ALLOWED_HOSTS = ['localhost','127.0.0.1','157.245.245.146','ingenialo.com','www.ingenialo.com','ecdb.ingenialo.com','www.ingenialo.io','ingenialo.io']

#Rest Framework
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ]
}

# Static config in stored in local folder
LOCAL_CDN = True # LOCAL_CDN is a variable that is True for show statics from static_cdn folder

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,"ingenialo-ui","src","assets"),
    os.path.join(BASE_DIR,"ingenialo-ui","dist"),
]

# Webpack loader
INSTALLED_APPS += (
    'webpack_loader',
)

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, 'ingenialo-ui/webpack-stats-production.json'),
    }
}

