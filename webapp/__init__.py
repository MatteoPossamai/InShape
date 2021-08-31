from flask import Flask, render_template, redirect, url_for, session
from os import path
from flask_login import LoginManager

def create_app():
    app = Flask(__name__, static_url_path='/static')
    app.config['SECRET_KEY'] = 'healthykey'
    #config also databases when created

    #import blueprint
    from .view import view

    app.register_blueprint(view, url_prefix="/")

    #import model

    #initialize login manager

    return app