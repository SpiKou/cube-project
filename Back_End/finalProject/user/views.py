from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from user.models import User
from user.serializers import UserSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
