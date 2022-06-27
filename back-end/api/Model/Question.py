from pydantic import BaseModel


class Question(BaseModel):
   id_questions : int
   question : str
   description : str
   difficulty : int