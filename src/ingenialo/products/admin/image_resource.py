from import_export import resources
from import_export import fields
from import_export.widgets import ForeignKeyWidget
from ..models import Image
from ..models import Product

class ImageModelResource(resources.ModelResource):
    # product = fields.Field(
    #     column_name='product',
    #     attribute='product',
    #     widget=ForeignKeyWidget(Product, pk),
    # )

    class Meta:
        model = Image
        fields = ('id', 'product', 'image', 'active')




