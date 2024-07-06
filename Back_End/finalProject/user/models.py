from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
     user = models.OneToOneField(User, on_delete=models.CASCADE)
     firstName = models.CharField(max_length=50)
     lastName = models.CharField(max_length=50)
     email = models.EmailField(max_length=50)
     password = models.CharField(max_length=50)

     def __str__(self):
         return self.user.username

class UserStatus(models.Model):
     user_profile = models.ForeignKey(User, on_delete=models.CASCADE)
     status_content = models.CharField(max_length=200)
     created_at = models.DateTimeField(auto_now_add=True)
     updated_at = models.DateTimeField(auto_now=True)

     class Meta:
          verbose_name_plural = "User statuses"

     def __str__(self):
          return str(self.user_user)