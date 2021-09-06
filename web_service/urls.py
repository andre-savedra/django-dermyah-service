from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('wifi', views.wifi, name='wifi'),
    path('login', views.login, name='login'),
    path('connect', views.connect, name='connect')
]
