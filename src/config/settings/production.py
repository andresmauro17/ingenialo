"""Production settings."""

from .base import *  # NOQA

# Base
SECRET_KEY = os.getenv('INGENIALO_SECRET_KEY')
ALLOWED_HOSTS = ['localhost','127.0.0.1','157.245.245.146','ingenialo.com']

#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['localhost','127.0.0.1','157.245.245.146','ingenialo.com','www.ingenialo.com','ecdb.ingenialo.com','www.ingenialo.io','ingenialo.io']

# Static config in cdn service provider
#STATIC_ROOT = 'staticfiles'

# INSTALLED_APPS += (
#     'storages',
# )


# Static config in stored in local folder
LOCAL_CDN = True # LOCAL_CDN is a variable that is True for show statics from static_cdn folder

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,"ingenialo-ui","src","assets"),
    os.path.join(BASE_DIR,"ingenialo-ui","dist"),
]
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static_cdn", "static_root")

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static_cdn", "media_root")



# webpack loader
INSTALLED_APPS += (
    'webpack_loader',
)


WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, 'ingenialo-ui/webpack-stats.json'),
    }
}

# print("----------------------------")
# print("BASE_DIR",BASE_DIR)
# print("STATICFILES_DIRS",STATICFILES_DIRS)
# print("STATIC_ROOT",STATIC_ROOT)
# print("STATIC_URL",STATIC_URL)

# print("MEDIA_URL",MEDIA_URL)
# print("MEDIA_ROOT",MEDIA_ROOT)