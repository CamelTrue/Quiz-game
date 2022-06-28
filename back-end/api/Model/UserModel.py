from sqlite3 import Date
from typing import Optional
from pydantic import BaseModel


class UserModel(BaseModel):
   id_user : Optional[int]
   username : Optional[str]
   password : Optional[str]
   first_name : Optional[str]
   last_name : Optional[str]
   registration_date : Optional[Date]
   
