var app = angular.module('annaPhotography');

app.controller('GalleryImageCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries, Ligthbox){
    $scope.images = galleries.images;
    // $scope.myInterval = 3000;

// trying to get lightbox to work
    $scope.openLightboxModal = function (index) {
      Lightbox.openModal($scope.images, index);
  };
}]);
