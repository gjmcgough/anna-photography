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
      {image: "Corgi.png", title: "San Diego"},
      {image: "secret-hideaway.png", title: "Chicago"},
      {image: "llama.jpg", title: "New Orleans"},
      {image: "mex.jpg", title: "San Francisco"},
      {image: "surfing-1400X600.jpg", title: "Los Angeles"},
      {image: "rainbow_shave_ice_800.jpg", title: "Baja Nor"}
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
      {image: "rainbow_shave_ice_800.jpg"},
      {image: "secret-hideaway.png"},
      {image: "Corgi.png"},
      {image: "mex.jpg"},
      {image: "surfing-1400X600.jpg"},
      {image: "llama.jpg"},
    ];

    // $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getGalleryImagePath = function(galleryImageName) {
      return  "../img/" + galleryImageName;
    };

}]);

app.controller('AboutCtrl', [
  '$scope',
  function($scope){
    $scope.bio = '';
}]);
