var app = angular.module('annaPhotography', ['ui.router', 'templates', 'Devise']);

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
        controller: 'MainCtrl',
      });

    $stateProvider
      .state('new_gallery', {
        url: '/new_gallery',
        templateUrl: 'uploads/_new_gallery.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['galleries', function(galleries){
            return galleries.getGalleries();
          }]
        }
      });

    $stateProvider
      .state('upload_image', {
        url: '/upload_image',
        templateUrl: 'uploads/_upload_image.html',
        controller: 'CreateImageCtrl',
        resolve: {
          postPromise: ['galleries', function(galleries){
            return galleries.getGalleries();
          }]
        }
      });

  $urlRouterProvider.otherwise('index');

}]);

// function NavBarCtrl($scope) {
//     $scope.isCollapsed = true;
// }
