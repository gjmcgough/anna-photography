var app = angular.module('annaPhotography', ['ui.router', 'templates', 'Devise']);

app.factory('galleries', [
  '$http',
  function($http){
  var o = {
    galleries: []
 };

 o.getGalleries = function() {
   return $http.get('/galleries.json').success(function(data){
     angular.copy(data, o.galleries);
   });
 };

 o.create = function(gallery) {
  return $http.post('/galleries.json', gallery).success(function(data){
    o.galleries.push(data);
  });
};

 return o;
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
        controller: 'MainCtrl',
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
