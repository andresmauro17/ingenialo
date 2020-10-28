from rest_framework import serializers

from ..models import Cart
from ..models import CartProducts
from ingenialo.products.api.serializer import ProductSerializer


class CartProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = CartProducts
        fields = ('product', 'quantity', 'timestamp','updated')

class CartSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = ('cart_id','products','FEE','subtotal','total','timestamp', 'updated')

    def get_products(self, cartModel):
        "obj is a Member instance. Returns list of dicts"""
        qset = CartProducts.objects.filter(cart=cartModel.id)
        print(cartModel)
        return [CartProductSerializer(m).data for m in qset]