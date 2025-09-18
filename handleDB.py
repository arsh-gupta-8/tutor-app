# from dotenv import load_dotenv
# from pymongo import MongoClient
# import os

# load_dotenv()

# mongo_uri = os.getenv("MONGO_URI")

# db_name = "TestDB"
# client = MongoClient("mongodb+srv://ARSHmello:<7IrKiatsT0V4yeR2>@tutorapp.us6gble.mongodb.net/?retryWrites=true&w=majority&appName=TutorApp")
# db = client[db_name]

# collection = db["TestCollection"]
# result = collection.insert_one({"test": "success"})

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb+srv://ARSHmello:<7IrKiatsT0V4yeR2>@tutorapp.us6gble.mongodb.net/?retryWrites=true&w=majority&appName=TutorApp"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)