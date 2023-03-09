from flask import jsonify, Blueprint

admin = Blueprint("admin_app", __name__, url_prefix="/api/admin/v1")

@admin.route("/")
def hello():
    return jsonify({"message": "Hello Admin!"}), 200