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

@api_view(['GET'])
def category_detail_view(request, category_id, *args, **kwargs):
    qs = Category.objects.filter(id=category_id)
    if not qs.exists():
        return Response({},status=404)
    obj = qs.first()
    serializer = CategorySerializer(obj)
    return Response(serializer.data, status=200)