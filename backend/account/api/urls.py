from django.conf.urls import url
from django.urls import path,include
from .views import UserList, login
from rest_framework.authtoken import views as rest_views

app_name = 'account'

urlpatterns = [
    url(r'^list/', UserList.as_view(), name ="list"), 
    # url(r'^login', rest_views.obtain_auth_token),
    url(r'^login', login, name='login'),
]
