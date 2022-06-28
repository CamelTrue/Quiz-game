from mysql.connector.connection import MySQLConnection
from mysql.connector.cursor import MySQLCursor
from Model.QuestionModel import QuestionModel
from DB.DBUtility import DBUtility
import mysql.connector
import random

class QuestionDao:

    @staticmethod
    def getAllQuestion():
        connection: MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            cursore.execute("select * from questions")
            records = cursore.fetchall()
            for row in records:
                question = QuestionModel(id_questions = row[0],question = row[1],difficulty = row[2])
                lista.append(question)
            return lista
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()

    @staticmethod
    def getQuestionById(id_questions):
        connection : MySQLConnection = DBUtility.getLocalConnection()
        try:
            cursore : MySQLCursor = connection.cursor()
            cursore.execute(
                f"select * from questions q where q.id_questions = {id_questions} ")
            records = cursore.fetchall()
            for row in records:
                question = QuestionModel(id_questions = row[0],question = row[1],difficulty=row[2])
            return question
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()

    @staticmethod
    def getRandomQuestion():
        connection : MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore : MySQLCursor = connection.cursor()
            cursore.execute("select q.id_questions,q.question from questions q")
            records = cursore.fetchall()
            for row in records:
                question = QuestionModel(id_questions = row[0],question = row[1])
                lista.append(question)
            return random.choice(lista)
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
