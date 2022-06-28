import mysql.connector
from DB.DBUtility import DBUtility
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection
from Model.AnswerModel import AnswerModel
from Model.QuestionModel import QuestionModel
class AnswerDao:

    @staticmethod
    def getAnswerByQuestionId(id_questions : int):
        connection: MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            query = f"""select q.id_questions,q.question,a.answer,a.is_correct
                        from answer a 
                        join questions_answer qa on a.id_answer = qa.id_answer 
                        join questions q on q.id_questions = qa.id_questions
                        where qa.id_questions = {id_questions}"""
            cursore.execute(query)
            records = cursore.fetchall()
            for row in records: 
               question = QuestionModel(id_questions=row[0],question=row[1])  
               answer = AnswerModel(question=question,answer=row[2],is_correct=row[3])
               lista.append(answer)
            return lista
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
