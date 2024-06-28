from django.db import models
from django.contrib.auth.models import User
import mongoengine as me
from werkzeug.security import generate_password_hash

class User(me.Document): 
    firstName = me.StringField(max_length=50, required=True)
    lastName = me.StringField(max_length=50, required=True)
    email = me.StringField(max_length=50, required=True, unique=True)
    password = me.StringField(required=True)

    def save(self, *args, **kwargs):
        self.password = generate_password_hash(self.password)
        super(User, self).save(*args, **kwargs)
