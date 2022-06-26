from pydantic import BaseModel
from Question import Question


class AnswerModel(BaseModel):
   answer_id : int
   answer : str
   Question.question_id
   