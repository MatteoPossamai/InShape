from flask import Blueprint, render_template, request
from flask.helpers import flash
from flask_login import current_user, login_required
from . import db

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
            current_user.weightStrory += "&" + str(int(newWeight))
            db.session.commit()
        except:
            flash("Invalid input", category="error")
    
    i = 1
    i1 = 0
    arr = []
    ws = current_user.weightStrory
    if ws:
        while i+1 < len(ws):
            i+=1
            if ws[i] == "&" and i != len(ws):
                arr.append(ws[i1+1:i])
                i1 = i
                i += 1
        arr.append(ws[i1+1:])
    return render_template("journey.html", user = current_user, data = arr)