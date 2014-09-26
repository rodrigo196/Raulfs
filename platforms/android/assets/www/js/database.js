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

            this.listUsers = function(sucessCB){

                function queryDB(tx) {
                    tx.executeSql('SELECT * FROM USER', [], querySuccess, errorCB);
                }

                function querySuccess(tx, results) {

                    // the number of rows returned by the select statement
                    var users = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        users[i] = results.rows.item(i);
                    }

                    sucessCB(users);
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
