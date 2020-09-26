from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.


class CategoriesTemplateView(TemplateView):
    template_name = "categories/categories.html"

