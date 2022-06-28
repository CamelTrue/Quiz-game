from colorama import reinit
from fastapi import FastAPI
from Model.QuestionModel import QuestionModel
from Dao.QuestionDao import QuestionDao


app = FastAPI()
 
@app.get("/question")
async def get_all_questions():
    return QuestionDao.getAllQuestion()
 
@app.get("/question/{id_questions}")
async def get_question_by_question_id(id_questions):
    return QuestionDao.getQuestionById(id_questions)
    
@app.get("/random")
async def get_random_question():
    return QuestionDao.getRandomQuestion()
