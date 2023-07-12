# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('index.html')

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, url_for, send_from_directory
from flask_bootstrap import Bootstrap
import cv2
import base64

app = Flask(__name__)
bootstrap = Bootstrap(app)


# from flask import Flask, render_template
# app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sketch1')
def sketch1():
    return render_template('sketch1.html')

@app.route('/sketch2')
def sketch2():
    return render_template('sketch2.html')
@app.route('/sketch3')
def sketch3():
    return render_template('sketch3.html')

if __name__ == '__main__':
    app.run(debug=True)

