from rest_framework import viewsets
from .serializers import RecognizedObjectSerializer
from .models import RecognizedObject


# API endpoint that allows users to be viewed or edited.
class RecognizedObjectViewSet(viewsets.ModelViewSet):
    queryset = RecognizedObject.objects.all()
    serializer_class = RecognizedObjectSerializer
