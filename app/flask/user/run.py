from flask import jsonify, Blueprint

user = Blueprint("user", __name__, url_prefix="/api/user/v1")

@user.route("/")
def hello():
    return jsonify({"message": "Hello User!"}), 200