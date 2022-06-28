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
            cursore.execute("select rt.id_user,u.username,date_execution_test,MAX(score) from result_test rt join users u on u.id_user = rt.id_user")
            record = cursore.fetchone()
            user = UserModel(id_user = record[0],username=record[1])
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
            cursore.execute("select * from result_test")
            record = cursore.fetchall()
            for row in record :
               score_id = row[0]
               id_user = row[1]
               score = row[2]
               date_execution_test =row[3]
               testResult = TestResultModel(score_id=score_id,id_user=id_user,score=score,date_execution_test=date_execution_test)
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
            cursore.execute("")
            record = cursore.fetchall()
            for row in record :
               score = row[0]
               lista.append(score)
            return lista   
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()