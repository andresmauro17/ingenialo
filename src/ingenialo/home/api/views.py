# restFramework imports
from rest_framework.response import Response
from rest_framework.decorators import api_view

# local imports
from .serializer import HeroSerializer
from ..models import Hero

@api_view(['GET'])
def hero_list_view(request, *args, **kwargs):
    """ Hero Api """
    qs = Hero.objects.all()
    serializer = HeroSerializer(qs, many=True)
    return Response(serializer.data)