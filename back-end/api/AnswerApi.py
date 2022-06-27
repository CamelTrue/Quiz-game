from fastapi import FastAPI
from Model.Question import Question 
from Dao.AnswerDao import AnswerDao

class AnswerApi :
 app = FastAPI()
   
 @app.get("/answer/{questionId}")
 async def get_answer_by_question_id(question : Question):
    return AnswerDao.getAnswerByQuestionId(question.question_id)