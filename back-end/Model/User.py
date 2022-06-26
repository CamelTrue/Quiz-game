from sqlite3 import Date
from h11 import Data
from pydantic import BaseModel
from Question import Question


class User(BaseModel):
   userId : int
   username : str
   registrationDate : Data
   password : str
   firstName : str
   lastName : str