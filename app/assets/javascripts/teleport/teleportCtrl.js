var app = angular.module('annaPhotography');

app.controller('TeleportCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.cover_images = galleries.cover_images;
    console.log($scope.cover_images);;

}]);
