from Dao.UserDao import UserDao
from Dao.TestResultDao import TestResultDao
from Dao.QuestionDao import QuestionDao
from Dao.AnswerDao import AnswerDao

class Service:
    
    def main():
        
       print(UserDao.getAllUsers())
       ##print(UserDao.getUserByIdAndPassword("Tommy","skasfa"))
       ##print(QuestionDao.getAllQuestion())
       ##print(TestResultDao.getHighScore())
       ##print(TestResultDao.getAllScores())
       ##print(TestResultDao.getPointByIdQuestionAndIdAnswer(1,11))
       ##print(QuestionDao.getQuestionById(1))
       ##print(QuestionDao.getRandomQuestion())
<<<<<<< HEAD
       ##print(AnswerDao.getAnswerByQuestionId(1))
       print()
=======
    #    print(AnswerDao.getAnswerByQuestionId(1))
    #    print()
>>>>>>> 04ff50a58c735485232951e02ffda670d696dd52
if __name__ == "__main__":
    Service.main()