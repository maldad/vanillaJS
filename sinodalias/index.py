from flask import Flask, render_template, url_for, request
import datetime
import database
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/post', methods=['POST'])
def post():
    now = datetime.datetime.now()
    print "POST: ", now.strftime("%Y/%m/%d %H:%M")
    jsonData = request.get_json()
    print jsonData['fecha'], jsonData['folio'],jsonData['nombre'],jsonData['matricula'],jsonData['carrera'],jsonData['concepto'],jsonData['nivel'],jsonData['numero'],jsonData['letra']
    return "this was a post"

@app.route('/get', methods=['GET'])
def get():
    folio = database.queryFolio()
    # database.closeConecction()
    return folio
