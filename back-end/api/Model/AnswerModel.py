from Model.QuestionModel import QuestionModel
from pydantic import BaseModel
from typing import Optional

class AnswerModel(BaseModel):
   id_answer : Optional[int]
   answer : Optional[str]
   is_correct : Optional[int]
   question : Optional[QuestionModel]
    
   