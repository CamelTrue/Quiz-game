from fastapi import FastAPI
from Model.QuestionModel import QuestionModel
from Dao.AnswerDao import AnswerDao

app = FastAPI()
   
@app.get("/answer/{question_id}")
async def get_answer_by_question_id(question_id ):
   return AnswerDao.getAnswerByQuestionId(question_id)