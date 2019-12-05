from django.shortcuts import render
from rest_framework import viewsets
from .models import Students
from .serializers import StudentsSerializer,StudentsCreateSerializer
from rest_framework .response import Response
from rest_framework import generics
from rest_framework .decorators import api_view
from rest_framework import status
from rest_framework.generics import ListAPIView,CreateAPIView, DestroyAPIView
from rest_framework import viewsets


# Create your views here.
class StudentsList(ListAPIView):
    serializer_class = StudentsSerializer
    queryset = Students.objects.all()



class StudentlistCreate(CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsCreateSerializer

class Studentlistdelete(DestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsCreateSerializer
    lookup_field = 'id'




