from random import random
import mysql.connector
from DB.DBUtility import DBUtility
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection


class TestResultDao:

    @staticmethod
    def getHighScore():
        connection: MySQLConnection = DBUtility.getLocalConnection()
        try:
            cursore: MySQLCursor = connection.cursor()
            cursore.execute("select MAX(score) as max_score from result_test")
            record = cursore.fetchone()
            return record[0]
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
            cursore.execute("select result_test.score from result_test")
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