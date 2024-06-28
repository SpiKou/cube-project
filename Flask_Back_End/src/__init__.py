from flask import Flask
from flask_cors import CORS
from src.user_blueprint import user
from src.employee_blueprint import employee
from mongoengine import connect
from pymongo import MongoClient
from flask_jwt_extended import JWTManager

app = Flask(__name__)
jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "so secret it's not even funny"

connect(
    host="mongodb+srv://cfuser:XLf9lDv4GUSB5Ncm@clustermx0.znfs7oe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMx0",
    db="codingfactory",
    alias="codingfactory",
)

# client = MongoClient("mongodb+srv://cfuser:XLf9lDv4GUSB5Ncm@clustermx0.znfs7oe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMx0")
# db = client["codingfactory"]
# collection = db["users"]

cors = CORS(
    app,
    resources={r"*": {"origins": ["http://localhost:5000/"]}},
)

app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(employee, url_prefix="/employee")