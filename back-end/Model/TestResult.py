from h11 import Data
from pydantic import BaseModel
from Question import Question
from User import User


class TestResult(BaseModel):
   id_user : User.id_user
   score : int
   date_execution_test : Data
   score_id : int