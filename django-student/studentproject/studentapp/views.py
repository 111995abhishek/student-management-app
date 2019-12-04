from django.shortcuts import render
from rest_framework import viewsets
from .models import Students
from .serializers import StudentsSerializer,StudentsCreateSerializer
from rest_framework .response import Response
from rest_framework import generics
from rest_framework .decorators import api_view
from rest_framework import status
from rest_framework.generics import CreateAPIView


# Create your views here.
class StudentsView(viewsets.ModelViewSet):
    serializer_class = StudentsSerializer
    queryset = Students.objects.all()

@api_view(['GET'])
def api_Students_list_view(request):
    students = list(Students.objects.all())
    if request.method == 'GET':
        serializer = StudentsSerializer(students , many=True)
    return Response(serializer.data)

class StudentlistCreate(CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsCreateSerializer

# @api_view(['GET'])
# #127.0.0.1/hotels/1/
# def api__detail_view(request, id):
#     try:
#         hotel=Hotel.objects.get(id=id)
#     except Hotel.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     serializer = HotelSerializer(hotel)
#     return Response(serializer.data)
