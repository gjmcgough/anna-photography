var app = angular.module('annaPhotography', ['ui.router', 'templates', 'Devise', 'ngFileUpload', 'bootstrapLightbox', 'angular-loading-bar']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  'cfpLoadingBarProvider',
  function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {

    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'index/_index.html',
        controller: 'TeleportCtrl',
        resolve: {
          postPromise: ['galleries', function(galleries){
            return galleries.getCoverImages();
          }]
        }
      });

    $stateProvider
      .state('teleport', {
        url: '/teleport',
        templateUrl: 'teleport/_teleport.html',
        controller: 'TeleportCtrl',
        resolve: {
          postPromise: ['galleries', function(galleries){
            return galleries.getCoverImages();
          }]
        }
      });

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about/_about.html'
      });

    $stateProvider
      .state('location_gallery', {
        url: '/location_gallery/{id}',
        templateUrl: 'location_gallery/_location_gallery.html',
        controller: 'GalleryImageCtrl',
        resolve: {
          postPromise: ['$stateParams', 'galleries', function($stateParams, galleries){
            return galleries.getImages($stateParams.id);
          }]
        }
      });

    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'new_gallery/_new.html',
        controller: 'NewGalleryCtrl',
        resolve: {
          postPromise: ['galleries', function(galleries){
            return galleries.getGalleries();
          }]
        }
      });

    $stateProvider
      .state('new_gallery', {
        url: '/new_gallery',
        templateUrl: 'new_gallery/_new_gallery.html',
        controller: 'NewGalleryCtrl',
        resolve: {
          postPromise: ['galleries', function(galleries){
            return galleries.getGalleries();
          }]
        }
      });

    $stateProvider
      .state('upload_image', {
        url: '/upload_image/{id}',
        templateUrl: 'uploads/_upload_image.html',
        controller: 'UploadImageCtrl',
        resolve: {
          gallery: ['$stateParams', 'galleries', function($stateParams, galleries){
            return galleries.getGallery($stateParams.id);
          }],
          postPromise: ['$stateParams', 'galleries', function($stateParams, galleries){
            return galleries.getImages($stateParams.id);
          }]
        }
      });

    $stateProvider
      .state('change_cover_image', {
        url: '/change_cover_image/{id}',
        templateUrl: 'uploads/_change_cover_image.html',
        controller: 'UploadImageCtrl',
        resolve: {
          gallery: ['$stateParams', 'galleries', function($stateParams, galleries){
            return galleries.getGallery($stateParams.id);
          }],
          postPromise: ['$stateParams', 'galleries', function($stateParams, galleries){
            return galleries.getImages($stateParams.id);
          }]
        }
      });

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('new');
          })
        }]
      });

  $urlRouterProvider.otherwise('index');
  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.includeSpinner = false;

}]);
