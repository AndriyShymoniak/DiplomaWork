from rest_framework import serializers
from .models import RecognizedObject


class RecognizedObjectSerializer(serializers.ModelSerializer):
    # image = serializers.ImageField(max_length=None, use_url=True)
    class Meta:
        model = RecognizedObject
        fields = ('id',
                  'latitude',
                  'longitude',
                  'description',
                  'image')
