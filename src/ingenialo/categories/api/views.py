# restFramework imports
from rest_framework.response import Response
from rest_framework.decorators import api_view

# local imports
from .serializer import CategorySerializer
from ..models import Category


@api_view(['GET'])
def categories_list_view(request, *args, **kwargs):
    pass
    """ Category Api """
    qs = Category.objects.all()
    serializer = CategorySerializer(qs, many=True)
    return Response(serializer.data)

