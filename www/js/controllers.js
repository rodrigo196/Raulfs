angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', '$http', function(scope, http) {
	  	
	scope.user = {};
        scope.user.email = "";

        scope.user.password = "";

        scope.user.birthday = "";

        var log = "";

    scope.cadastrar = function(){
	       console.log(scope);
           alert("Usuário " + scope.user.email + " cadastrado!");
           console.log("senha " + scope.user.password + " cadastrado!");
            console.log("LOOP " + scope.user.birthday);

        http.get('http://www.uol.com.br', function(sucess){
            console.log(sucess) ;
        },
        function(error){
            console.log(error) ;
        });


	};

        scope.cancelar = function(){
            scope.email = "";
            scope.senha = "";
            scope.dataNascimento = "";
        
	};


}])

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
        console.log($scope.friends);
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
