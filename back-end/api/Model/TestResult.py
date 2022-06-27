from h11 import Data
from pydantic import BaseModel
from . import User


class TestResult(BaseModel):
   
   score : int
   date_execution_test : Data
   score_id : int