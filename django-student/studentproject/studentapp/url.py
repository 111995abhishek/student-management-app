from django.urls import  path, include
from .views import *

urlpatterns=[
    path('list/',StudentsList.as_view(),name='students_list'),
    path('list/create/',StudentlistCreate.as_view(),name='students_list_create'),
    path('list/delete/<int:id>/',Studentlistdelete.as_view(), name='student_list_delete'),
]