import mongoengine as me

class Employee(me.Document):
    name = me.StringField(required=True)
    position = me.StringField(required=True)
    meta = {"collection": "employees", "db_alias": "codingfactory"}

class Position(me.Document):
    title = me.StringField(required=True)