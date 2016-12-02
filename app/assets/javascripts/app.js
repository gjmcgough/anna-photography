var app = angular.module('annaPhotography', ['ui.router', 'templates', 'Devise']);

app.factory('galleries', [function(){

}])

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
        controller: 'GalleryCtrl'
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
        controller: 'GalleryCtrl'
      });

    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'uploads/_new.html',
        controller: 'MainCtrl'
      });

  $urlRouterProvider.otherwise('index');

}]);

// function NavBarCtrl($scope) {
//     $scope.isCollapsed = true;
// }
