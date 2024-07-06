import requests

def client():
    credentials = {"username":"admin", "password":"1234"}
    response = requests.post('http://127.0.0.1:8000/dj-rest-auth/login/', data=credentials)
    print('Status code:', response.status_code)
    response_data = response.json()
    print(response_data)

if __name__ == '__main__':
    client()