angular.module('starter.controllers', [])

    .controller('DashCtrl', ['$scope', '$http', function(scope, http) {



        scope.user = {};
        scope.user.email = "";

        scope.user.password = "";

        scope.user.birthday = "";

        var db = window.openDatabase("database", "1.0", "Test DB", 100000000);

        var log = "";

        scope.users = [];

        load();

        scope.cadastrar = function(){

            require(["js/model", "js/database"], function(model, database){
                var user = new model();
                console.log(user);

                var _database = new database();

                _database.openDatabase(function(err){
                    console.log(err);
                }, function(){
                    _database.insertUser(scope.user.email, scope.user.password, scope.user.birthday, success, error);
                    function success(){
                        load();
                        alert("Usuario cadastrado!");
                    }
                    function error(err){
                        alert("erro ao cadastrar!");
                        console.log(err);
                    }
                });
            });



        };

        scope.cancelar = function(){
            scope.email = "";
            scope.senha = "";
            scope.dataNascimento = "";

        };

        function load(){
            function queryDB(tx) {
                tx.executeSql('SELECT * FROM USER', [], querySuccess, errorCB);
            }

            function querySuccess(tx, results) {

                // the number of rows returned by the select statement
                console.log("Insert ID = " + results.rows.length);

                for (var i  = 0; i < results.rows.length; i++){
                    scope.users[i] = results.rows.item(i);
                }
                scope.$apply();
            }

            function errorCB(err) {
                alert("Error processing SQL: "+err.code);
            }

            db.transaction(queryDB, errorCB);

        }


    }])

    .controller('FriendsCtrl', function($scope, Friends) {
        $scope.friends = Friends.all();
        console.log($scope.friends);
    })

    .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', ['$scope' ,function(scope) {
        scope.takePicture = function(){
            navigator.camera.getPicture(onSuccess, onFail, {quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });

            function onSuccess(imageData){
                var image = document.getElementById("myImage");
                image.src = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                alert('Erro ' + message);
            }
        }
    }]);
