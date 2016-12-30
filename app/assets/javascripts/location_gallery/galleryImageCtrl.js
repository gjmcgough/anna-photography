var app = angular.module('annaPhotography');

app.controller('GalleryImageCtrl', [
  '$scope',
  'galleries',
  'Lightbox',
  function($scope, galleries, Lightbox){
    $scope.images = galleries.images;

    $scope.openLightboxModal = function(index) {
      Lightbox.openModal($scope.images, index);
    };

}]);
