import json
import mysql.connector

class DBUtility: 
    
    @staticmethod
    def getConnectionLocal():
        print("creo la connessione")
        with open("DB\DbCredential.json") as f:
         db = json.load(f) 
        connessione=None      
        try:
             # Connessione a MySQL
            connessione = mysql.connector.connect(
             # Params
            host = db['endpoint'],
            user = db['user'],
            password = db['password'],
            database = db['database'])
            print(connessione)
        except mysql.connector.Error as e:
            print("Error reading data from MySQL table", e)
        return connessione
    
    @staticmethod
    def closeConnectionLocal():
        connetion = DBUtility.getConnectionLocal().close()
        