var app = angular.module('annaPhotography');

app.controller('GalleryImageCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.images = galleries.images;
    $scope.myInterval = 3000;

}]);
