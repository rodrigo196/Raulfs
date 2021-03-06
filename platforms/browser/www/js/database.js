/**
 * Created by rodrigo on 06/09/14.
 */

define(
    "js/database",
    [],

    function(){

        function database(){
            this.db = window.openDatabase("database", "1.0", "Test DB", 100000000);



            this.openDatabase = function(errorCB, successCB){
                function populateDB(tx){
                    tx.executeSql('CREATE TABLE IF NOT EXISTS USER(email unique, password, birthday)');
                }

                this.db.transaction(populateDB, errorCB, successCB);
            };


            this.insertUser = function(email, password, birthday, successCB, errorCB){

                function populateDB(tx){
                    tx.executeSql('CREATE TABLE IF NOT EXISTS USER(email unique, password, birthday)');
                    tx.executeSql('INSERT INTO USER(email, password, birthday) VALUES("'
                        + email +'", "'+ password +'", "'+birthday+'")');
                }

                this.db.transaction(populateDB, errorCB, successCB);
            };

            this.listUsers = function(successCB){

                function queryDB(tx) {
                    tx.executeSql('SELECT * FROM USER', [], querySuccess, errorCB);
                }

                function querySuccess(tx, results) {

                    var users = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        users[i] = results.rows.item(i);
                    }

                    successCB(users);
                }

                function errorCB(err) {
                    alert("Error processing SQL: " + err.code);
                }

                this.db.transaction(queryDB, errorCB);


            }
        }

        return database;
    }

);
