var app = angular.module('annaPhotography', ['ui.router', 'templates']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'index/_index.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('teleport', {
        url: '/teleport',
        templateUrl: 'teleport/_teleport.html',
        controller: 'CoverImageCtrl'
      });

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about/_about.html',
        controller: 'BioCtrl'
      });

    $stateProvider
      .state('location_gallery', {
        url: '/location_gallery/{id}',
        templateUrl: 'location_gallery/_location_gallery.html',
        controller: 'GalleryImageCtrl'
      });

  $urlRouterProvider.otherwise('index');

}]);

// function NavBarCtrl($scope) {
//     $scope.isCollapsed = true;
// }