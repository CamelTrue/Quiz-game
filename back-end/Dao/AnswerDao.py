import mysql.connector
from DB.DBUtility import DBUtility
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection


class AnswerDao:

    @staticmethod
    def getAnswerByQuestionId(id_question):
        connection: MySQLConnection = DBUtility.getLocalConnection()
        try:
            cursore: MySQLCursor = connection.cursor()
            query = f""""select answer.answer 
                          from answer a 
                          join on a.id_question = {id_question}"""
            cursore.execute(query, (id_question))
            records = cursore.fetchall()
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
