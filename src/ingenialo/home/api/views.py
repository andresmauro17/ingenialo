# Django imports
from django.conf import settings

# restFramework imports
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

# local imports
from .serializer import HeroSerializer
from ..models import Hero

@api_view(['GET'])
def hero_list_view(request, *args, **kwargs):
    """ Hero Api """
    qs = Hero.objects.all()
    serializer = HeroSerializer(qs, many=True)
    return Response(serializer.data)

class appSettingsApiView(APIView):
    """
        Django app Api 
        give a json with some Django Settings varibales that the frontend need
    """
    def get(self, request, format=None):
        """
            Return a list of all the settings.
        """
        settingsJson = {
                "STATIC_URL":settings.STATIC_URL,
                "MEDIA_URL":settings.MEDIA_URL
            }
        return Response(settingsJson)


