import imp
import mysql.connector
from DB.DBUtility import DBUtility
from mysql.connector.cursor import MySQLCursor
from mysql.connector.connection import MySQLConnection


class UserDao:

    @staticmethod
    def getAllUsers():
        connection: MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore: MySQLCursor = connection.cursor()
            query = " select * from users"
            cursore.execute(query)
            records = cursore.fetchall()
            for row in records:
                id_user = row[0]
                username = row[1]
                password = row[2]
                first_name = row[3]
                last_name = row[4]
                registration_date = row[5]
                lista.append(id_user)
                lista.append(username)
                lista.append(password)
                lista.append(first_name)
                lista.append(last_name)
                lista.append(registration_date)
            return(lista)
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()

    @staticmethod
    def getUserByIdAndPassword(username, password):
        connection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore = connection.cursor()
            query = f"""select u.id_user,u.first_name,u.last_name,u.registration_date
                      from users u
                      where u.username = '{username}'
                      and u.password = '{password}'"""
            cursore.execute(query)
            records = cursore.fetchall()
            for row in records:
                id_user = row[0]
                first_name = row[1]
                last_name = row[2]
                registration_date = row[3]
                lista.append(id_user)
                lista.append(first_name)
                lista.append(last_name)
                lista.append(registration_date)
            return(lista)
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
