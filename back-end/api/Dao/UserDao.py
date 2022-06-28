from mysql.connector.connection import MySQLConnection
from mysql.connector.cursor import MySQLCursor
from asyncio.windows_events import NULL
from Model.UserModel import UserModel 
from DB.DBUtility import DBUtility
import mysql.connector


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
                user = UserModel(id_user= id_user,username=username,password=password,first_name=first_name
                                 ,last_name=last_name,registration_date=registration_date)
                lista.append(user)
                ##lista.append(username)
                ##lista.append(password)
                ##lista.append(first_name)
                ##lista.append(last_name)
                ##lista.append(registration_date)
            return(lista)
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()

    @staticmethod
    def getUserByIdAndPassword(username, password):
        connection : MySQLConnection = DBUtility.getLocalConnection()
        lista = list()
        try:
            cursore : MySQLCursor= connection.cursor()
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
                user = UserModel(id_user= id_user,first_name=first_name
                                ,last_name=last_name,registration_date=registration_date)
            return(user)
        except mysql.connector.Error as e:
            print("\nError reading data from MySQL table", e)
        finally:
            if connection.is_connected():
                connection.close()
