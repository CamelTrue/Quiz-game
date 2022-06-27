from random import random
import mysql.connector
from DB.DBUtility import DBUtility
import random
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection


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
                id_question = row[0]
                question = row[1]
                difficulty = row[2]
                lista.append(id_question)
                lista.append(question)
                lista.append(difficulty)
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
            cursore.execute(
                f"select * from questions q where q.id_question = {id_question} ")
            records = cursore.fetchall()
            for row in records:
                id_question = row[0]
                question = row[1]
                lista.append(id_question)
                lista.append(question)
            print(lista)
            return lista
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
            cursore.execute(f"select question.question from question")
            records = cursore.fetchall()
            for row in records:
                question = row[0]
                lista.append(question)
            return random.choices(lista, k=len(lista))
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
