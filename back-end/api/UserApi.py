from webbrowser import get
from fastapi import FastAPI
from ..Model.User import User
from ..Dao.UserDao import UserDao

class UserApi:
    app = FastAPI()
    
@get("/user/{username}/{password}")
async def get_user(user : User):
    return UserDao.getUserByIdAndPassword(user.username,user.password)