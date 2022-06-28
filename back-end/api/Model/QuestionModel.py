from typing import Optional
from pydantic import BaseModel


class QuestionModel(BaseModel):
   id_questions : Optional[int]
   question : str
   difficulty : Optional[int]