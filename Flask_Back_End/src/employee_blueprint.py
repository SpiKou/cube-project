from flask import Blueprint, request, Response
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.employee_model import Employee, Position
import json
from mongoengine.errors import NotUniqueError

employee = Blueprint("employee", __name__)

@employee.route("/create", methods=["POST"])
@jwt_required()
def add_employee():
    try:
        data = request.get_json()
        print(data)
        Employee(**data).save()
        return Response(json.dumps({"msg": "Employee added"}), status=201)
    except NotUniqueError:
        return Response(json.dumps({"msg": "Employee already exists"}), status=400)
    except Exception as e:
        print(e)
        return Response(json.dumps({"msg": str(e)}), status=400)
    
@employee.route("/position/<string:position>", methods=["GET"])
@jwt_required()
def get_employee_by_position(position):
    try:
        employees = Employee.objects(position=position).exclude("id").first()
        if employee:
            return Response(json.dumps(employees.to_mongo()), status=200)
        return Response(json.dumps({"msg": "Employee not found"}), status=404)
    except Exception as e:
        print(e)
        return Response(json.dumps({"msg": str(e)}), status=400)
    
@employee.route("/position/<string:position>", methods=["PATCH"])
def update_employee(position):
    try:
        data = request.get_json()
        Employee.objects(position=position).update_one(**data)
        return Response(json.dumps({"msg": "Employee updated"}), status=200)
    except Exception as e:
        print(e)
        return Response(json.dumps({"msg": str(e)}), status=400)