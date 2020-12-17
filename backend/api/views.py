#from django.contrib.auth.models import User
from .serializers import *
from rest_framework import viewsets
from .models import *

#date
from django.utils import timezone
import datetime
#
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from datetime import datetime
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
import json
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
# def public(request):
#     return HttpResponse("You don't need to be authenticated to see this")

# @api_view(['GET'])
# def private(request):
#     return HttpResponse("You should not see this message if not authenticated!")
# def index(request):
#     admin_list = Admin.objects
#     context = {'admin_list': admin_list}
#    return render(request, '')

# Rest api end point


# def get_User_list(request):
#     if request.method == 'GET':
#         User_list = User.objects
#         serializer = UserSerializer(User_list, many=True)
#         return JsonResponse(serializer.data, safe=False)


# # ViewSets define the view behavior.
# def get(self, request, format=None):
#     serializer = self.serializer_class(data=request.data)
#     if serializer.is_valid():
#         obj = serializer.save()
#         response = Response(standardResponse(data=serializer.data), 
#                             status=status.HTTP_201_CREATED)
#         # If you have defined a get_absolute_url method on your model, then
#         # you can use that to get a URL for the new object
#         response['Location'] = obj.get_absolute_url()
#         return response

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    print('***************** SIGNUP **************')
    print(request)
    #body_unicode = request.body.decode('utf-8')
    #body = json.loads(body_unicode)
    data = JSONParser().parse(request)
    print('here 61')
    serializer = UserSerializer(data=data)
    #username=body['username'], password=body['password'], email=body["email"]
    #serializer.set_password('password')
    print('**************** pass AFTER')
   # print(serializer.password)
    if serializer.is_valid():
            print('user serializer is valid')
            serializer.save()
            return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

#recieves donations
@api_view(['POST'])
@permission_classes([AllowAny])
def donate(request):
    data = JSONParser().parse(request)
    print(data)
    serializer = DonationSerializer(data=data)
    print('********************')
    print(serializer)
    date=timezone.now(),
    print('****           DATE              ')
    print(date)
        #
    now = datetime.datetime.now()
    print('****           DATE              ')
    print(now)
        # 
    if serializer.is_valid():
        print('valid')
        #
       
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return Response("ERR",status=400)

#return user id when sign in 
@api_view(['GET'])
def id(request):
    current_user = request.user
    print(current_user.id)
    return Response(current_user.id)

#changing pass later



@api_view(['GET'])
def index(request):
    print('**************************')
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    message = 'server is live current time is '
    return Response(data=message + date,status=status.HTTP_200_OK)

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['username']
    search_fields = ['username']
    ordering_fields = '__all__'
    ordering = ['username']

class HistoryViewSet (viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['user', 'kind']
    search_fields = ['user', 'kind']
    ordering_fields = ['user', 'kind']

class DonationViewSet (viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['user']
    search_fields = ['user']
    ordering_fields = ['user','amount']

class PlayViewSet(viewsets.ModelViewSet):
    queryset = Play.objects.all()
    serializer_class = PlaySerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['category']
    ordering_fields = ['category']

class RecordViewSet (viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['category']
    ordering_fields = ['category']

class PhotoViewSet (viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['category']
    ordering_fields = ['category']