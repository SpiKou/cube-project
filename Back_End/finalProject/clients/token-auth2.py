import requests

def client():
    data = {
        "username": "resttest",
        "email": "rest@example.com",
        "password1": "changeme123",
        "password2": "changeme123"
    }

    response = requests.post("http://127.0.0.1:8000/dj-rest-auth/registration/", data=data)
    print("Status code:", response.status_code)

if __name__ == "__main__":
    client()