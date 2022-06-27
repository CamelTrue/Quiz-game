from Dao.UserDao import UserDao
from fastapi import FastAPI
from Model.User import User

app = FastAPI()
    
@app.get("/user/{username}/{password}")
async def get_user(user : User):
    return UserDao.getUserByIdAndPassword(user.username,user.password)