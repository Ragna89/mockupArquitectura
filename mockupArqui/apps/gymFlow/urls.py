from django.urls import path 
from . import views
urlpatterns = [ path('', views.cargarInicio, name='Inicio'),
                path('login', views.cLogin, name='login'),
                path('registro', views.cRegistro),
                path('rutinas', views.cargarRutinas, name='rutinas')  ]