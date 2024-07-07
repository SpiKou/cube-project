from pymongo import MongoClient
import pymongo
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

client = pymongo.MongoClient('mongodb+srv://cfuser:XLf9lDv4GUSB5Ncm@clustermx0.znfs7oe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMx0')
dbname = client['codingfactory']
collection = dbname['users', 'employees']

users_1 = {
    'firstName': 'John',
    'lastName': 'Doe',
    'email': 'john@example.com',
    'password': '1234'
}

employees_1 = {
    'name': 'John Doe',
    'position': 'Manager'
}

collection.insert_one(users_1, employees_1)

user_details = collection.find({})
employees_details = collection.find({})

