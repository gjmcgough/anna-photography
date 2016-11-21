var app = angular.module('annaPhotography', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: '/index.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('teleport', {
        url: '/teleport',
        templateUrl: '/teleport.html',
        controller: 'CoverImageCtrl'
      });

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: '/about.html',
        controller: 'AboutCtrl'
      });

    $stateProvider
      .state('location_gallery', {
        url: '/location_gallery',
        templateUrl: '/location_gallery.html',
        controller: 'GalleryImageCtrl'
      });

  $urlRouterProvider.otherwise('index');

}]);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.image = '';
}]);

app.controller('CoverImageCtrl', [
  '$scope',
  function($scope){
    $scope.myCoverImages = [
      {image: "../img/galleries/san_francisco/Corgi.png", title: "San Diego", gallery: '../img/galleries/san_francisco'},
      {image: "../img/galleries/baja/secret-hideaway.png", title: "Chicago", gallery: '../img/galleries/baja'},
      {image: "../img/galleries/new_orleans/llama.jpg", title: "New Orleans", gallery: '../img/galleries/new_orleans'},
      {image: "../img/galleries/chicago/mex.jpg", title: "San Francisco", gallery: '../img/galleries/chicago'},
      {image: "../img/galleries/los_angeles/surfing-1400X600.jpg", title: "Los Angeles", gallery: '../img/galleries/los_angeles'},
      {image: "../img/galleries/san_diego/rainbow_shave_ice_800.jpg", title: "Baja Nor", gallery: '../img/galleries/san_diego'}
    ];

    // $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getCoverImagePath = function(coverImageName) {
      return  "../img/" + coverImageName;
    };

}]);

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
      return  "../img/galleries/" + galleryImageName;
    };

}]);

app.controller('AboutCtrl', [
  '$scope',
  function($scope){
    $scope.bio = '';
}]);
