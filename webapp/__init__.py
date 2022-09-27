from flask import Flask, render_template, redirect, url_for, session
from os import path
from flask_login import LoginManager, login_manager
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__,static_url_path='/static')
    app.config['SECRET_KEY'] = "healtykey"
    app.config['MYSQL_HOST'] = 'sql11.freemysqlhosting.net'
    app.config['MYSQL_USER'] = 'sql11522528'
    app.config['MYSQL_PASSWORD'] = 'y6TEA9gq4R'
    app.config['MYSQL_DB'] = 'sql11522528'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
    db.init_app(app)
    db.init_app(app)
    #config also databases when created
    from .model import User

    create_database(app)

    #import blueprint
    from .view import view
    from .auth import auth

    app.register_blueprint(view, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    #import model

    #initialize login manager
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app

def create_database(app):
    if not path.exists(DB_NAME):
        db.create_all(app=app)
