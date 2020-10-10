from django.shortcuts import render, redirect
from .models import Hero
from django.conf import settings

def home_page(request):
    context = {
        "title":"Ingenialo Industrias, explora tu instinto MAKER!",
        "content":"welcome to home page",
    }
    return render(request, "home/home_page.html", context)

def front(request):

    context = {
        "title":"Ingenialo Industrias, explora tu instinto MAKER!",
        "content":"welcome to home page"
    }
    return render(request, "base_temp.html", context)
