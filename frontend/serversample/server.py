# import os
# from flask import Flask, flash, request, redirect, url_for, session
# from werkzeug.utils import secure_filename
# from flask_cors import CORS, cross_origin
# import logging

# logging.basicConfig(level=logging.INFO)

# logger = logging.getLogger('HELLO WORLD')



# UPLOAD_FOLDER = 'New'
# ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

# app = Flask(__name__)
# CORS(app, expose_headers='Authorization')
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# @cross_origin()
# @app.route('/upload', methods=['POST'])
# def fileUpload():
#     target=os.path.join(UPLOAD_FOLDER,'test_docs')
#     if not os.path.isdir(target):
#         os.mkdir(target)
#     logger.info("welcome to upload`")
#     file = request.files['file'] 
#     filename = secure_filename(file.filename)
#     destination="/".join([target, filename])
#     file.save(destination)
#     session['uploadFilePath']=destination
#     response="Whatever you wish too return"
#     return response

# if __name__ == "__main__":
#     app.secret_key = os.urandom(24)
#     app.run(debug=True,host="0.0.0.0",use_reloader=False)


from flask import Flask,request,redirect,json,render_template,Request,jsonify
import requests
import base64
from keras.models import load_model
from time import sleep
from keras.preprocessing.image import img_to_array
from keras.preprocessing import image
import cv2
import numpy as np
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1

# import csv

face_cascade = cv2.CascadeClassifier(r'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')
model = load_model(r'model21_final.h5')
path = 'C:\\Users\ACER\Downloads'
os.chdir(path)
files = sorted(os.listdir(os.getcwd()), key=os.path.getmtime)






@app.route('/api', methods=['GET', 'POST'])

		
def api():
	path = 'C:\\Users\ACER\Downloads'
	os.chdir(path)
	files = sorted(os.listdir(os.getcwd()), key=os.path.getmtime)	
	oldest = files[0]
	newest = files[-1]


	image = cv2.imread(os.path.join("C:\\","Users","ACER","Downloads",newest))
	# image=cv2.imread('download.jfif')
	image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
	faces = face_cascade.detectMultiScale(image, 1.3, 5)
	for (x,y,w,h) in faces:
		image = cv2.rectangle(image,(x,y),(x+w,y+h),(255,0,0),2)
		roi_gray = image[y:y+h, x:x+w]
		roi_color = image[y:y+h, x:x+w]
		eyes = eye_cascade.detectMultiScale(roi_gray)
		for (ex,ey,ew,eh) in eyes:
			cv2.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)
	# cv2.imshow("img",image)
	# cv2.waitKey(0)	
	test_img = cv2.resize(image, (48,48))
	test_img = test_img.reshape(1,48,48,1)
	prediction = model.predict(test_img)
	class_labels = ['Anger', 'Fear', 'Happy', 'Sad']
	prediction = np.argmax(prediction)
	final_prediction = class_labels[prediction]
	return jsonify(final_prediction)
def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
		
		

# 	with open('database.csv',newline='', mode='w') as database2:
# 		email= data["email"]
# 		# subject= data["subject"]
# 		# message= data["message"]
# 		csv_writer = csv.writer(database2, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)		
# 		csv_writer.writerow([email])

# @app.route('/signup',methods=['POST','GET'])
# def signup():
# 		data = request.form.to_dict()
# 		email=data["email"]

		
			
		
		# redirect("./App")