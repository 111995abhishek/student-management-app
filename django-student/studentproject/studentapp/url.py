from django.urls import  path, include
from .views import *

urlpatterns=[
    path('list/',api_Students_list_view,name='students_list'),
    path('list/create/',StudentlistCreate.as_view(),name='students_list_create'),
]