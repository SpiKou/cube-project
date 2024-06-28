from mongoengine import connect
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "so secret key that you cannot guess it"

connect(
    host="mongodb+srv://cfuser:XLf9lDv4GUSB5Ncm@clustermx0.znfs7oe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMx0",
    db="codingfactory",
    alias="codingfactory"
)

cors = CORS(
    app, 
    resources={r"*": {"origins": ["http://localhost:3000"]}},
)

