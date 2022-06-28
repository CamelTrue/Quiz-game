from Dao.TestResultDao import TestResultDao
from Dao.QuestionDao import QuestionDao
from Dao.AnswerDao import AnswerDao
from Dao.UserDao import UserDao
from fastapi import FastAPI

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

@app.get("/answer/{question_id}")
async def get_answer_by_question_id(question_id ):
   return AnswerDao.getAnswerByQuestionId(question_id)

@app.get("/score")
async def get_all_score():
   return TestResultDao.getAllScores()    
@app.get("/highscore")
async def get_highest_score():
   return TestResultDao.getHighScore()
@app.get("/user")
async def get_all_users():
    return UserDao.getAllUsers()
    
@app.get("/user/{username}/{password}")
async def get_user(username,password):
    return UserDao.getUserByIdAndPassword(username,password)
 