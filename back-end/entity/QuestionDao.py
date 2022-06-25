from random import random
import mysql.connector
from DB.DBUtility import DBUtility
import random


class QuestionDao:

      @staticmethod
      def getAllQuestion(): 
       connection = DBUtility.getLocalConnection()
       lista = list()
       try:
          cursore = connection.cursor()            
          cursore.execute("select * from question ") 
          records = cursore.fetchall()
          for row in records:
                    id_question = row[0]
                    question = row[1]
                    lista.append(f"{id_question}")
                    lista.append(f"{question}")
          print(lista)
          return lista
       except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
       finally:
            if connection.is_connected():
                connection.close()
                
      @staticmethod
      def getQuestionById(id_question): 
       connection = DBUtility.getLocalConnection()
       lista = list()
       try:
          cursore = connection.cursor()            
          cursore.execute(f"select * from question q where q.id_question = {id_question} ") 
          records = cursore.fetchall()
          for row in records:
                    id_question = row[0]
                    question = row[1]
                    lista.append(f"{id_question}")
                    lista.append(f"{question}")
          print(lista)
          return lista
       except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
       finally:
            if connection.is_connected():
                connection.close()  
                
                 
      @staticmethod
      def getRandomQuestion(): 
       connection = DBUtility.getLocalConnection()
       lista = list()
       try:
          cursore = connection.cursor()            
          cursore.execute(f"select question.question from question") 
          records = cursore.fetchall()
          for row in records:
                    question = row[0]
                    lista.append(f"{question}")
          return random.choices(lista, k = len(lista))
       except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
       finally:
            if connection.is_connected():
                connection.close()   
                
        