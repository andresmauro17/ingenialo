from django.shortcuts import render, redirect

def home_page(request):

    context = {
        "title":"Ingenialo Industrias, explora tu instinto MAKER!",
        "content":"welcome to home page"
    }
    return render(request, "home/home_page.html", context)
