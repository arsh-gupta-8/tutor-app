from dotenv import load_dotenv
from flask_cors import CORS
from flask import Flask, jsonify
from pymongo import MongoClient
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

mongo_uri = os.getenv("MONGO_URI")
dbUsers = "dbInfo"
client = MongoClient(mongo_uri)
dbInfo = client[dbUsers]

tableUser = dbInfo["tableUser"]

# Endpoint to get all users
@app.route("/users", methods=["GET"])
def get_users():
    users = list(tableUser.find({}, {"_id": 0}))  # exclude MongoDB _id
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)