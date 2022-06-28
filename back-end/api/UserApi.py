from Dao.UserDao import UserDao
from fastapi import FastAPI
from Model.UserModel import UserModel

app = FastAPI()

@app.get("/user")
async def get_all_users():
    return UserDao.getAllUsers()
    
@app.get("/user/{username}/{password}")
async def get_user(username,password):
    return UserDao.getUserByIdAndPassword(username,password)