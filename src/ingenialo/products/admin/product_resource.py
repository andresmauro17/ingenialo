from import_export import resources
from ..models import Product

class ProductModelResource(resources.ModelResource):

    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'description', 'tecnical_detail', 'price', 'quantity', 'featured', 'active')