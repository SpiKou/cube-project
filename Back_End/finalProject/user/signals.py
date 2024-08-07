from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from user.models import User

@receiver(post_save, sender=User)
def create_user(sender, instance, created, **kwargs):
    print("Created:", created)
    if created:
        User.objects.create(user=instance)