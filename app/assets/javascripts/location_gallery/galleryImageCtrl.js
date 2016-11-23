var app = angular.module('annaPhotography');

app.controller('GalleryImageCtrl', [
  '$scope',
  function($scope){
    $scope.myGalleryImages = [
      {image: "san_diego/rainbow_shave_ice_800.jpg"},
      {image: "baja/secret-hideaway.png"},
      {image: "san_francisco/Corgi.png"},
      {image: "chicago/mex.jpg"},
      {image: "los_angeles/surfing-1400X600.jpg"},
      {image: "new_orleans/llama.jpg"},
    ];

    // $scope.gallery = galleries.galleries[$stateParams.id];
    // $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getGalleryImagePath = function(galleryImageName) {
      return  "../images/galleries/" + galleryImageName;
    };

}]);
