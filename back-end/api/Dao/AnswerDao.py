from mysql.connector.connection import MySQLConnection
from mysql.connector.cursor import MySQLCursor
from Model.QuestionModel import QuestionModel
from Model.AnswerModel import AnswerModel
from DB.DBUtility import DBUtility
import mysql.connector

class AnswerDao:

    @staticmethod
    def getAnswerByQuestionId(id_questions: int):
        connection: MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            query = f"""select q.id_questions,q.question,a.answer,a.is_correct,a.id_answer
                        from answer a 
                        join questions_answer qa on a.id_answer = qa.id_answer 
                        join questions q on q.id_questions = qa.id_questions
                        where qa.id_questions = {id_questions}"""
            cursore.execute(query)
            records = cursore.fetchall()
            for row in records:
                question = QuestionModel(id_questions=row[0], question=row[1])
                answer = AnswerModel(id_answer=row[4], answer=row[2], is_correct=row[3],question=question)
                lista.append(answer)
            return lista
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
