from typing import Optional
from pydantic import BaseModel
from Model.QuestionModel import QuestionModel

class AnswerModel(BaseModel):
   question : Optional[QuestionModel]
   id_answer : Optional[int]
   answer : Optional[str]
   is_correct : Optional[int]
   