from fastapi import FastAPI
from Dao.TestResultDao import TestResultDao

class TestResultApi:
 app = FastAPI()

 @app.get("/score")
 async def get_highest_score():
    return TestResultDao.getHighScore()
     