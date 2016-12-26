var app = angular.module('annaPhotography');

app.controller('NewGalleryCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.galleries = galleries.galleries;
    $scope.images = galleries.images;
    console.log($scope.images);

    $scope.makeGallery = function(){
      if(!$scope.title || $scope.title === '') {return;}
      galleries.create({
        title: $scope.title,
      });
      $scope.title = '';
    };

    // $scope.data = {
    //   model: null,
    //   availableOptions: $scope.galleries
    // };
}]);
