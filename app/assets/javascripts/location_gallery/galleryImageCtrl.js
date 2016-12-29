var app = angular.module('annaPhotography');

app.controller('GalleryImageCtrl', [
  '$scope',
  'galleries',
  'Lightbox',
  function($scope, galleries, Lightbox){
    $scope.images = galleries.images;

    console.log($scope.images[0].thumb);

    $scope.openLightboxModal = function(index) {
      console.log(index);
      Lightbox.openModal($scope.images, index);
    };
    console.log();

}]);
