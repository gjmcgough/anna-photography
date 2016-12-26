var app = angular.module('annaPhotography');

app.controller('AuthCtrl', [
  '$scope',
  '$state',
  'Auth',
  function($scope, $state, Auth){
  $scope.login = function() {
      Auth.login($scope.user).then(function(){
        $state.go('new');
      });
    };
}]);
