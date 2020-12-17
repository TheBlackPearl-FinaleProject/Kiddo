"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from api import views
from django.urls import path
from django.contrib import admin
from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_jwt import views as jwt_views

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'historys', views.HistoryViewSet)
router.register(r'plays', views.PlayViewSet)
router.register(r'records', views.RecordViewSet)
router.register(r'donations', views.DonationViewSet)
router.register(r'photos', views.PhotoViewSet)
# router.register(r'admins', views.AdminViewSet)
# router.register(r'token')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
   path('admin/', admin.site.urls),
   path("", include( router.urls )),
   path("", include('djoser.urls')),
   path("", include('djoser.urls.authtoken')), #api/auth/
#    url(r'^account/', include('djoser.urls')),
   url(r'^auth/login/', jwt_views.obtain_jwt_token, name='auth'),
   path('checkserver/',views.index,name='index'),
   path('signup/', views.signup, name='signup'),
   path('getid/', views.id, name="id"),
   path('donate/', views.donate, name="donate")
]

# /users/id  -> apiGet
