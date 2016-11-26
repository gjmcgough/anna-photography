var app = angular.module('annaPhotography');

app.controller('MainCtrl', [
'$scope',
'image',
function($scope){
  $scope.image = '';
}]);
