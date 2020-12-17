from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import AbstractBaseUser, UserManager,PermissionsMixin
#creates a new db model to add it to django

class User(AbstractBaseUser,PermissionsMixin):
    objects =  UserManager()
    is_staff = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=True)
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=244)
    email = models.EmailField(max_length=200, unique=True)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    thumbnail = models.CharField(max_length=244, default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FMgEe33BwCdnfLO89QdJEYxWMgc9I982fw&usqp=CAU")
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['password']
    def __str__(self):
        return self.username
        
class History(models.Model):
    user = models.CharField(max_length=40)
    link = models.CharField(max_length=244)
    thumbnail = models.CharField(max_length=244)
    kind = models.CharField(max_length=50)

class Donation(models.Model):
    user = models.CharField(max_length=40, default="unknown")
    amount = models.IntegerField(default=0)
    REQUIRED_FIELDS = [ "amount" ]

class Record(models.Model):
    link = models.CharField(max_length=244, unique=True)
    category = models.CharField(max_length=50, default="video")
    thumbnail = models.CharField(max_length=244, unique=True)

class Photo(models.Model):
    link = models.CharField(max_length=244, unique=True)
    category = models.CharField(max_length=50, default="picture")
    sound = models.CharField(max_length=244)

class Play(models.Model):
    link = models.CharField(max_length=244, unique=True)
    category = models.CharField(max_length=50, default="game")
    thumbnail = models.CharField(max_length=244, unique=True)
