import random
import os

from django.db import models
from .product import Product

def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext

def upload_image_path(instance, filename):
    # print(instance.product.id)
    #print(filename)
    new_filename = random.randint(1,3910209312)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext)
    return "products/{product_id}/{final_filename}".format(
            product_id=instance.product.id, 
            final_filename=final_filename
            )

class Image(models.Model):
    product = models.ForeignKey(Product,related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_image_path)
    active = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def delete(self, *args, **kwars):
        self.image.delete()
        super().delete(*args,**kwars)

