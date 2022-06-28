from Model.UserModel import UserModel
from pydantic import BaseModel
from typing import Optional
from sqlite3 import Date

class TestResultModel(BaseModel):
   
   score_id : Optional[int]
   user : Optional[UserModel]
   score : int
   date_execution_test : Optional[Date]
   