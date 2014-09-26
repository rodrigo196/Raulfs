angular.module('starter.controllers', [])

    .controller('DashCtrl', ['$scope', '$http', function(scope, http) {

        require(["js/model", "js/database"], function(model, database) {

            scope.user = {};
            scope.user.email = "";

            scope.user.password = "";

            scope.user.birthday = "";

            var _database = new database();

            scope.users = [];

            load();

            scope.cadastrar = function () {


                var user = new model();
                console.log(user);

                var _database = new database();

                _database.openDatabase(error, function () {
                    _database.insertUser(scope.user.email, scope.user.password, scope.user.birthday, success, error);
                    function success() {
                        load();
                        alert("Usuario cadastrado!");
                    }

                    function error(err) {
                        alert("erro ao cadastrar!");
                        console.log(err);
                    }
                });


            };

            scope.cancelar = function () {
                scope.user.email = "";
                scope.user.password = "";
                scope.user.birthday = "";

            };

            function load() {

                function succes(users){
                    scope.users = users;
                    scope.$apply();
                }

                _database.openDatabase(error, function () {
                    _database.listUsers(succes);
                });

            }

            function error(err){
                console.log(err);
            }

        });
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
