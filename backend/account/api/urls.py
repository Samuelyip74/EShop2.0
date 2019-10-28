from django.conf.urls import url
from django.urls import path,include
from .views import UserList, login

app_name = 'account'

urlpatterns = [
    url(r'^list/', UserList.as_view(), name ="list"), 
    url(r'^login', login, name="login")
]
