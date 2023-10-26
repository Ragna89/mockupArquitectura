from django.shortcuts import render, redirect
from .models import *
from django.conf import settings
from .forms import RegisterForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse

# Create your views here.
def cargarInicio(request): 
    return render(request,"index.html")

def cargarRutinas(request): 
    return render(request,"rutinas.html")

def cRegistro(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')

        if User.objects.filter(username=username).exists():
            messages.error(request, 'El Nombre de Usuario ya está en uso.')
            return render(request, 'registro.html')

        if User.objects.filter(email=email).exists():
            messages.error(request, 'El Email ya está en Uso.')
            return render(request, 'registro.html')

        form = RegisterForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(email=email, username=username, password=password)

            messages.success(request, 'Usuario creado con Exito.')
            return redirect('login')
        else:
            messages.error(request, 'Por favor, Ingrese los Datos Solicitados de Manera Correcta.')

    else:
        form = RegisterForm()

    return render(request, 'registro.html', {'form': form})

def cLogin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)


        if user is not None:
            login(request, user)
            messages.success(request, 'Bienvenido Usuario.')
            return redirect('rutinas')
        else:
            messages.error(request, 'Los Datos Ingresados son Incorrectos.')

    return render(request, "iniciarsesion.html")

def logout_view(request):
    logout(request)
    return redirect('inicio')