import mysql.connector
from DB.DBUtility import DBUtility
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection
from Model.AnswerModel import AnswerModel

class AnswerDao:

    @staticmethod
    def getAnswerByQuestionId(id_question):
        connection: MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            query = f""""select answer.answer 
                          from answer a 
                          join question q on a.id_question = {id_question}"""
            cursore.execute(query,(id_question))
            records = cursore.fetchall()
            answer = AnswerModel(id_answer=records[0],answer=records[1],correct_wrong=records[2])
            lista.append(answer)
            return lista
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
