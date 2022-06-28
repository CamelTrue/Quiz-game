from fastapi import FastAPI
from Model.QuestionModel import QuestionModel
from Dao.AnswerDao import AnswerDao

class AnswerApi :
 app = FastAPI()
   
 @app.get("/answer/{questionId}")
 async def get_answer_by_question_id(question_id : int):
    return AnswerDao.getAnswerByQuestionId(question_id)