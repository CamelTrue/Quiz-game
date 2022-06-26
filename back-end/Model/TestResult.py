from h11 import Data
from pydantic import BaseModel
from Question import Question
from User import User


class TestResult(BaseModel):
   userId : User.userId
   score : int
   testDate : Data