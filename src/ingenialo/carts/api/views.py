
# DRF imports
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST','GET'])
def add_product(request):
    """
    this method add a product to the related cart
    """
    print("add product requestt!")
    return Response({'cart':'added!'})
