var app = angular.module('annaPhotography');

app.controller('MainCtrl', [
'$scope',
'galleries',
function($scope, galleries){
  $scope.galleries = galleries.galleries;
}]);
