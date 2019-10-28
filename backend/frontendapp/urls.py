  
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.conf.urls import url
from django.urls import path,include
from . import views

app_name = 'frontendapp'

urlpatterns = [
    path('', views.index),
]
