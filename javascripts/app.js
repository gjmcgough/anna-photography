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
          controller: 'ImageCtrl'
        });

      $urlRouterProvider.otherwise('index');
  }]);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.image = '';
}]);

app.controller('ImageCtrl', [
  '$scope',
  function($scope){
    $scope.myImages = [
      {image: "Corgi.png", title: "San Diego"},
      {image: "secret-hideaway.png", title: "Chicago"},
      {image: "llama.jpg", title: "New Orleans"},
      {image: "mex.jpg", title: "San Francisco"},
      {image: "surfing-1400X600.jpg", title: "Los Angeles"},
      {image: "rainbow_shave_ice_800.jpg", title: "Baja Nor"}
    ];

    // $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getImagePath = function(imageName) {
      return  "../img/" + imageName;
    };

}]);
