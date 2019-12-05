from rest_framework import serializers
from .models import Students

class StudentsSerializer(serializers.ModelSerializer):
    skills= serializers.ListField(source='skills_comma_split')

    class Meta:

        model = Students
        fields = ('id','firstName', 'lastName', 'skills' )

class StudentsCreateSerializer(serializers.ModelSerializer):

    class Meta:

        model = Students
        fields = ('firstName', 'lastName', 'skills' )