from django.shortcuts import render
from django.http import Http404
from django.views.generic import DetailView

from .models import Product

class ProductDetailView(DetailView):
    # queryset = Product.objects.all()
    template_name = "products/detail.html"

    def get_context_data(self,*args, **kwargs):
        context = super(ProductDetailView, self).get_context_data(*args, **kwargs)#super llama al padres ListView. y obtiene el contexto
        if context.get('product').quantity > 5:
            disponibility = "En existencias"
        elif context.get('product').quantity <= 5 and context.get('product').quantity >= 1:
            disponibility = "Quedan pocos productos!"
        else:
            disponibility = "Producto Sin existencias"
        print(disponibility)
        context['disponibility'] = disponibility
        return context

    def get_object(self, *args, **kwargs):
        request = self.request
        pk = self.kwargs.get('pk')
        # instance = Product.objects.get_by_id(pk)
        
        try:
            instance = Product.objects.get(id=pk, active=True)
        except Product.DoesNotExist:
            raise Http404("Not found..")
        except Product.MultipleObjectsReturned:
            qs = Product.objects.filter(id=pk, active=True)
            instance = qs.first()
        except:
            raise Http404("Uhhmmm ")
        return instance

