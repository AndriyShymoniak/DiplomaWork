from django.core.files.storage import default_storage
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .models import RecognizedObject
from .serializers import RecognizedObjectSerializer
from .imageAi import *
from rest_framework.response import Response


@csrf_exempt
def recognizerApi(request, id=0):
    if request.method == 'GET':
        if id != 0:
            recognized_object = RecognizedObject.objects.get(id=id)
            serializer_class = RecognizedObjectSerializer(recognized_object)
            return JsonResponse(serializer_class.data, safe=False)
        else:
            recognized_objects = RecognizedObject.objects.all()
            serializer_class = RecognizedObjectSerializer(recognized_objects, many=True)
            return JsonResponse(serializer_class.data, safe=False)
    elif request.method == 'POST':
        received_data = JSONParser.parse(JSONParser(), request)
        serializer_class = RecognizedObjectSerializer(data=received_data)
        if serializer_class.is_valid():
            serializer_class.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == 'PUT':
        received_data = JSONParser.parse(JSONParser(), request)
        single_recognized_object = RecognizedObject.objects.get(id=received_data['id'])
        serializer_class = RecognizedObjectSerializer(single_recognized_object, data=received_data)
        if serializer_class.is_valid():
            serializer_class.save()
            return JsonResponse("Updated successfully", safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method == 'DELETE':
        single_recognized_object = RecognizedObject.objects.get(id=id)
        single_recognized_object.delete()
        return JsonResponse("Deleted successfully", safe=False)


@csrf_exempt
def saveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
