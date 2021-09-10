from flask import Blueprint, render_template, session, redirect, url_for, request
from flask_login import current_user
import json
import os

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