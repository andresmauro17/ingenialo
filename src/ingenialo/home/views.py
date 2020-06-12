from django.shortcuts import render, redirect
from .models import Hero
from django.conf import settings

def home_page(request):
    heros = Hero.objects.filter(is_active=True).order_by('-position')
    context = {
        "title":"Ingenialo Industrias, explora tu instinto MAKER!",
        "content":"welcome to home page",
        'heros':heros,
    }
    return render(request, "home/home_page.html", context)

def front(request):

    context = {
        "title":"Ingenialo Industrias, explora tu instinto MAKER!",
        "content":"welcome to home page"
    }
    return render(request, "base_temp.html", context)
