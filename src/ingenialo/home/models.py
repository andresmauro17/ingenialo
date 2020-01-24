from django.db import models


# Create your models here.
class Hero(models.Model):
    image = models.ImageField(upload_to="hero/", height_field=None, width_field=None, max_length=None)
    tittle = models.CharField(max_length=50, blank=True, null=True)
    legend = models.CharField(max_length=50, blank=True, null=True)
    is_active = models.BooleanField(default=False)
    position = models.IntegerField(unique=True, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.tittle
