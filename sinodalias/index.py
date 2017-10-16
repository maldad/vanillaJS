from flask import Flask, render_template, url_for, request
import datetime
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/post', methods=['POST'])
def post():
    now = datetime.datetime.now()
    print "POST: ", now.strftime("%Y/%m/%d %H:%M")
    jsonData = request.get_json()
    print jsonData['fecha']
    print jsonData['folio']
    print jsonData['nombre']
    print jsonData['matricula']
    print jsonData['carrera']
    print jsonData['concepto']
    print jsonData['nivel']
    print jsonData['numero']
    print jsonData['letra']
    return "this was a post"
