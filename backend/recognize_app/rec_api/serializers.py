from rest_framework import serializers
from .models import RecognizedObject


class RecognizedObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecognizedObject
        fields = ('id', 'latitude', 'longitude')
