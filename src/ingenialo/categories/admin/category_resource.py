from import_export import resources
from import_export.widgets import ManyToManyWidget
from ..models import Category
from ingenialo.products.models import Product

class CategoryModelResource(resources.ModelResource):
    # products = fields.Field(widget=ManyToManyWidget(Product))
    class Meta:
        model = Category
        # fields = ('id', 'name', 'description', 'parent')