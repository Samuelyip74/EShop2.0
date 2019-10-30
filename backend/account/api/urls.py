from django.conf.urls import url
from django.urls import path,include
from .views import UserAPI, login,RegistrationAPI,LoginAPI
from rest_framework.authtoken import views as rest_views

app_name = 'account'

urlpatterns = [
    url(r'^user/$', UserAPI.as_view(), name ="list"), 
    url(r'^login/$', LoginAPI.as_view()),
    url(r'^register/$', RegistrationAPI.as_view()),
]
