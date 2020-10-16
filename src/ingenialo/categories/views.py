from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.


class CategoriesTemplateView(TemplateView):
    template_name = "categories/categories.html"

class CategoryTemplateView(TemplateView):
    template_name = "categories/detail.html"

    def get(self, request, category_id, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        context['category_id'] = category_id
        return self.render_to_response(context)