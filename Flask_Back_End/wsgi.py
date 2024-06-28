# import sys
# sys.path.append('~/workspace/cube-project/Flask_Back_End/wsgi.py')  # Replace '/path/to/src' with the actual path to the 'src' module

from src import app

if __name__ == "__main__":
    app.run()