import mysql.connector
from DB.DBUtility import DBUtility

class UserDao:
 
    
 @staticmethod
 def getUserByIdAndPassword(username, password):
    connection = DBUtility.getLocalConnection()
    lista = list()
    try:
         cursore = connection.cursor()
         query = f""""select * from user u
                      where u.username = {username}
                      and u.password = {password}"""
         cursore.execute(query,(username,password)) 
         records = cursore.fetchall()
         for row in records:
                    username = row[0]
                    registration = row[1]
                    lista.append(f"{username}")
                    lista.append(f"{registration}")
         print(lista)
    except mysql.connector.Error as e:
          print("\nError reading data from MySQL table", e)
    finally:
            if connection.is_connected():
                connection.close()