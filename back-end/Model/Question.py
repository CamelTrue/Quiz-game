from pydantic import BaseModel
from Question import Question


class Question(BaseModel):
   question_id : int
   question : str
   description : str
   difficulty : str