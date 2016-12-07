var app = angular.module('annaPhotography');

app.controller('CreateImageCtrl', [
  '$scope',
  'galleries',
  'Upload',
  function($scope, galleries, Upload){
    $scope.galleries = galleries.galleries;

}]);
