from django.db import models

class Product(models.Model):
    title           = models.CharField(max_length=120)
    slug            = models.SlugField(blank=True, unique=True)
    description     = models.TextField()
    tecnical_detail = models.TextField(blank=True, null=True)
    price           = models.DecimalField(decimal_places=2, max_digits=20, default=00.00)
    quantity        = models.IntegerField()
    featured        = models.BooleanField(default=False)
    active          = models.BooleanField(default=True)
    timestamp       = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title    
