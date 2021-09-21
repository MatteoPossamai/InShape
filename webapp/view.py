from flask import Blueprint, render_template, session, redirect, url_for, request
from flask.helpers import flash
from flask_login import current_user, login_required
from .model import User
from . import db
import json

view = Blueprint("view", __name__)

@view.route("/", methods=["GET","POST"])
def home():
    return render_template("home.html")

@view.route("/about", methods=["GET","POST"])
def about():
    return render_template("about.html")

@view.route("/healthy", methods=["GET","POST"])
def healthy():
    return render_template("health.html")
    
@view.route("/journey", methods=["GET", "POST"])
@login_required
def journey():
    if request.method == "POST":
        newWeight = request.form.get("value")
        try: 
            newWeight = int(newWeight)
            current_user.weightStrory += "&" + str(newWeight)
            db.session.commit()
        except:
            flash("Invalid input", category="error")
    
    data = {}
    ws = current_user.weightStrory
    if ws:
        i = 0
        ind1 = 0
        ind2 = 0
        arr = []
        while i<len(ws):
            #finish here the code
            #https://stackoverflow.com/questions/65359530/passing-json-data-from-flask-to-javascript
            if ws[i] == "&":
                ind1 = i
            else: 
                ind2 += 1
    return render_template("journey.html", user = current_user, data = None)