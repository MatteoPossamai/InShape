from flask import Blueprint, render_template, session, redirect, url_for
from flask_login import current_user

view = Blueprint("view", __name__)

@view.route("/")
def home():

    return render_template("home.html")