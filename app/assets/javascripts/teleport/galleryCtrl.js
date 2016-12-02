var app = angular.module('annaPhotography');

app.controller('GalleryCtrl', [
  '$scope',
  function($scope){
    $scope.myCoverImages = [
      {image: "san_francisco/Corgi.png", title: "San Diego", gallery: '../img/galleries/san_francisco'},
      {image: "baja/secret-hideaway.png", title: "Chicago", gallery: '../img/galleries/baja'},
      {image: "new_orleans/llama.jpg", title: "New Orleans", gallery: '../img/galleries/new_orleans'},
      {image: "chicago/mex.jpg", title: "San Francisco", gallery: '../img/galleries/chicago'},
      {image: "los_angeles/surfing-1400X600.jpg", title: "Los Angeles", gallery: '../img/galleries/los_angeles'},
      {image: "san_diego/rainbow_shave_ice_800.jpg", title: "Baja Nor", gallery: '../img/galleries/san_diego'}
    ];

    // $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getCoverImagePath = function(coverImageName) {
      return  "../../images/galleries/" + coverImageName;
    };

}]);
