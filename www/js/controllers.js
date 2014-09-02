angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.name = "Rodrigo";
	$scope.email = "";
        $scope.senha = "";
        $scope.dataNascimento = "";

        $scope.cadastrar = function(){
           alert("Usuário " + $scope.email + " cadastrado!");
           console.log("Usuário " + $scope.senha + " cadastrado!");
	};
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
