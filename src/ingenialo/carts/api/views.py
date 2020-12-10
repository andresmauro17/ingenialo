# Django imports
from django.shortcuts import get_object_or_404

# DRF imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Local
from ..utils import get_or_create_cart
from ingenialo.products.models import Product
from ingenialo.carts.models import CartProducts
from ingenialo.carts.api.serializer import CartSerializer


@api_view(['GET'])
def cart(request):
    """
    get cart with products
    """
    cart = get_or_create_cart(request)
    serializer = CartSerializer(cart)
    return Response(serializer.data, status=200)

@api_view(['POST','GET'])
def add_product(request):
    """
    this method add a product to the related cart
    """
    cart = get_or_create_cart(request)
    product = get_object_or_404(Product,pk = request.data['product'])
    quantity = int(request.data['quantity'])

    cart_product = CartProducts.objects.create_or_update_quantity(cart=cart, product=product, quantity=quantity)
    print(cart_product)
    
    return Response({'cart':'added!'})

@api_view(['delete'])
def remove_product(request,id):
    """
    this method remove a product to the cart
    """
    cart = get_or_create_cart(request)
    product = get_object_or_404(Product,pk = id)

    print("remove product method")
    print(cart)
    print(product)
    cart.products.remove(product)
    return Response({'product':'removed!'},status=200)