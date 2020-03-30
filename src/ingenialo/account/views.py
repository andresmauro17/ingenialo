from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from . import forms
from .models import User

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            print('usuario authenticado')
            messages.success(request, 'Bienvenido {}'.format(user.username))
            return redirect('home')
        else:
            messages.error(request, 'usuario o contraseña no validos')
            print('usuario no authenticado')
    return render(request, 'account/login.html')

def logout_view(request):
	logout(request)
	messages.success(request, 'session cerrada exitosamente')
	return redirect('account:login')


def register_view(request):
    form = forms.RegisterForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        user = form.save()

        if user:
            login(request, user)
            messages.success(request, 'usuario creado exitosamente')
            return redirect('home')


    return render(request, 'account/register.html',{
		'form': form
	})
