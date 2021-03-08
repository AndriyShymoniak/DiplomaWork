from .serializers import RecognizedObjectSerializer
from .models import RecognizedObject
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .imageAi import *


# todo - recognize image in POST
@csrf_exempt
def recognizerApi(request, id=0):
    print('++++++++++++++++++++++++++++')
    if request.method == 'GET':
        print('++++++++++++++++++++++++++++111')
        recognizedObjects = RecognizedObject.objects.all()
        print(recognizedObjects[0].image)
        serializer_class = RecognizedObjectSerializer(recognizedObjects, many=True)
        return JsonResponse(serializer_class.data, safe=False)
    elif request.method == 'POST':
        print('++++++++++++++++++++++++++++222222')
        data = JSONParser.parse(request)
        print('-------POST: ', data)
        serializer_class = RecognizedObjectSerializer(data=data)
        serializer_class.save()
        return JsonResponse("Added successfully", safe=False)
    elif request.method == 'PUT':
        print('++++++++++++++++++++++++++++333333')
        data = JSONParser.parse(request)
        single_recognized_object = RecognizedObject.objects.get(id=data['id'])
        serializer_class = RecognizedObjectSerializer(single_recognized_object, data=data)
        serializer_class.save()
        return JsonResponse("Updated successfully", safe=False)
    elif request.method == 'DELETE':
        print('++++++++++++++++++++++++++++444444')
        single_recognized_object = RecognizedObject.objects.get(id=id)
        single_recognized_object.delete()
        return JsonResponse("Deleted successfully", safe=False)
