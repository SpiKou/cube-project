import requests

def client():
    # credentials = {"username":"admin", "password":"1234"}
    # response = requests.post('http://127.0.0.1:8000/dj-rest-auth/login/', data=credentials)
    access_token = 'Token 5d57edbb4536ba4b2b4dc6b4d179fd2ce067948c'
    headers = {"Authorization": access_token}
    response = requests.get("http://127.0.0.1:8000/user/users/", headers=headers)
    print('Status code:', response.status_code)
    response_data = response.json()
    print(response_data)

if __name__ == '__main__':
    client()