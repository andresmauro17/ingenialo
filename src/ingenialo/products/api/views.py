# restFramework imports
from rest_framework.response import Response
from rest_framework.decorators import api_view

# local imports
from .serializer import ProductSerializer
from ..models import Product


@api_view(['GET'])
def products_list_view(request, *args, **kwargs):
    """ Hero Api """
    qs = Product.objects.all()
    serializer = ProductSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def products_detail_view(request, product_id, *args, **kwargs):
    print("requests------")
    qs = Product.objects.filter(id=product_id)
    if not qs.exists():
        return Response({},status=404)
    obj = qs.first()
    print("-------obj------")
    print(obj)
    serializer = ProductSerializer(obj)
    return Response(serializer.data, status=200)