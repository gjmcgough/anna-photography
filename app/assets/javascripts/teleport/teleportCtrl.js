var app = angular.module('annaPhotography');

app.controller('TeleportCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.galleries = galleries.galleries;
    $scope.cover_images = galleries.cover_images;
    $scope.home_image = galleries.cover_images[0];

}]);
