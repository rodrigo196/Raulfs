/**
 * Created by rodrigo on 06/09/14.
 */

define(
    "js/database",
    [],

    function(){

        function database(){
            this.db = window.openDatabase("database", "1.0", "Test DB", 100000000);



            this.openDatabase = function(errorCB, sucessCB){
                function populateDB(tx){
                    tx.executeSql('CREATE TABLE IF NOT EXISTS USER(email unique, password, birthday)');
                }

                this.db.transaction(populateDB, errorCB, sucessCB);
            };


            this.insertUser = function(email, password, birthday, sucessCB, errorCB){

                function populateDB(tx){
                    tx.executeSql('CREATE TABLE IF NOT EXISTS USER(email unique, password, birthday)');
                    tx.executeSql('INSERT INTO USER(email, password, birthday) VALUES("'
                        + email +'", "'+ password +'", "'+birthday+'")');
                }

                this.db.transaction(populateDB, errorCB, sucessCB);
            };
        }

        return database;
    }

);
