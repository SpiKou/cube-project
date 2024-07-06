from django.urls import path
from user.views import UserList

urlpatterns = [
    path('users/', UserList.as_view(), name='users-list'),
]