from colorama import reinit
from fastapi import FastAPI
from Model.Question import Question
from Dao.QuestionDao import QuestionDao

class QuestionApi :
 app = FastAPI()
 
 @app.get("/question")
 async def get_all_questions():
     return QuestionDao.getAllQuestion()
 
 @app.get("/question/{question_id}")
 async def get_question_by_question_id(question : Question):
     return QuestionDao.getQuestionById(question.question_id)
    
 @app.get("/question/random")
 async def get_random_question():
     return QuestionDao.getRandomQuestion()
