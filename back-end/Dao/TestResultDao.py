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
