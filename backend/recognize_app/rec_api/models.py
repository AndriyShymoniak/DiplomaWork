from django.db import models
from cloudinary.models import CloudinaryField


class RecognizedObject(models.Model):
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    description = models.CharField(max_length=200, default='empty description')
    image = CloudinaryField('image',
                            format='jpg',
                            folder='diplomawork',
                            default='https://res.cloudinary.com/ddmivk4av/image/upload/v1615040123/diplomawork/not_found.jpg')
