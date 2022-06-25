import mysql.connector
from DB.DBUtility import DBUtility

class AnswerDao:
 
  @staticmethod
  def getAnswerByQuestionId(questionId):
      connection = DBUtility.getLocalConnection()
      lista = list()
      try:
          cursore = connection.cursor()
          query = f""""select answer.answer 
                          from answer a 
                          join on a.question_id = {questionId}"""
          cursore.execute(query,(questionId)) 
          records = cursore.fetchall()
      except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
      finally:
            if connection.is_connected():
                connection.close()
              