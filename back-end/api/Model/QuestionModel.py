from pydantic import BaseModel
from typing import Optional

class QuestionModel(BaseModel):
   id_questions : Optional[int]
   question : Optional[str]
   difficulty : Optional[int]