from pydantic import BaseModel



class AnswerModel(BaseModel):
   id_answer : int
   answer : str
   correct_wrong : bool
   