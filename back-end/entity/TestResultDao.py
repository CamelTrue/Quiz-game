from random import random
import mysql.connector
from DB.DBUtility import DBUtility

class TestResult:
    
    @staticmethod
    def getHighScore(): 
       connection = DBUtility.getLocalConnection()
       try:
          cursore = connection.cursor()            
          max_score = cursore.execute(f"select MAX(score) as max_score from result_test") 
          return max_score
       except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
       finally:
            if connection.is_connected():
                connection.close()  
                 