from pydantic import BaseModel
from Question import Question


class Question(BaseModel):
   id_questions : int
   question : str
   description : str
   difficulty : int