from flask import Flask
from flask_cors import CORS
from admin.run import admin
from user.run import user

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False
CORS(app)

app.register_blueprint(admin)
app.register_blueprint(user)

if __name__ == "__main__":
    app.run()