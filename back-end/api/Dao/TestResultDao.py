from random import random
import mysql.connector
from DB.DBUtility import DBUtility
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection
from Model.TestResultModel import TestResultModel
from Model.UserModel import UserModel


class TestResultDao:

    @staticmethod
    def getHighScore():
        connection: MySQLConnection = DBUtility.getLocalConnection()
        try:
            cursore: MySQLCursor = connection.cursor()
            cursore.execute("select rt.id_user,u.username,date_execution_test,rt.score from result_test rt join users u on u.id_user = rt.id_user order by rt.score Desc limit 1")
            record = cursore.fetchone()
            user = UserModel(id_user = record[0],username=record[1],score= record[2])
            testResult = TestResultModel( date_execution_test= record[2],score=record[3],user=user)
            return testResult
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()

    @staticmethod
    def getAllScores():
        connection : MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            cursore.execute("select u.username, rt.score  from result_test rt join users u on rt.id_user = u.id_user")
            record = cursore.fetchall()
            for row in record :
              #score_id = row[0]
              #id_user = row[1]
              #score = row[3]
              #date_execution_test =row[3]
               user = UserModel(username=row[0])
               testResult = TestResultModel(user=user,score=row[1])
               lista.append(testResult)
            return lista   
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()



    @staticmethod
    def getPointByIdQuestionAndIdAnswer(id_question : int, id_answer):
        connection : MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            cursore.execute(f"SELECT qa.points from questions_answer qa join answer a on qa.id_answer = a.id_answer join questions q on qa.id_questions = q.id_questions where a.id_answer = {id_answer} and q.id_questions = {id_question}" )                                 
            record = cursore.fetchall()
            for row in record :
               testResult = TestResultModel(score=row[0])
               lista.append(testResult)
            return lista   
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():             
                connection.close()