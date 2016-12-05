var app = angular.module('annaPhotography');

app.controller('CreateImageCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.galleries = galleries.galleries;
}]);
