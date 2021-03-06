from django.db import models


class RecognizedObject(models.Model):
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
