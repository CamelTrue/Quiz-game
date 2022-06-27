from pydantic import BaseModel
from Question import Question


class AnswerModel(BaseModel):
   id_answer : int
   answer : str
   Question.id_question
   correct_wrong : bool
   