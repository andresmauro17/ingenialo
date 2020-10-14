from rest_framework import serializers
from ..models import Category
from ingenialo.products.api.serializer import ProductSerializer



class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = '__all__'

