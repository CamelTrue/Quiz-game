from Dao.UserDao import UserDao
from Dao.TestResultDao import TestResultDao
from Dao.QuestionDao import QuestionDao
from Dao.AnswerDao import AnswerDao

class Service:
    
    def main():
        
       ##print(UserDao.getAllUsers())
       ##print(UserDao.getUserByIdAndPassword("Tommy","skasfa"))
       ##print(QuestionDao.getAllQuestion())
       ##print(TestResultDao.getHighScore())
       ##print(TestResultDao.getAllScores())
       ##print(QuestionDao.getQuestionById(1))
       ##print(QuestionDao.getRandomQuestion())
       print(AnswerDao.getAnswerByQuestionId(1))
       print()
if __name__ == "__main__":
    Service.main()