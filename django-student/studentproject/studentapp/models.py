from django.db import models
from django import *

# Create your models here.

class Students(models.Model):

    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    skills = models.CharField(max_length=200)


    def __str__(self):
        return self.firstName

    def skills_comma_split(self):
        return list(str(self.skills).split(','))

