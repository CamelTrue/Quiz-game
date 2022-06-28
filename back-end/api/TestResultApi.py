from fastapi import FastAPI
from Dao.TestResultDao import TestResultDao
from Model.TestResultModel import TestResultModel

app = FastAPI()

@app.get("/score")
async def get_all_score():
   return TestResultDao.getAllScores()    
@app.get("/highscore")
async def get_highest_score():
   return TestResultDao.getHighScore()
 