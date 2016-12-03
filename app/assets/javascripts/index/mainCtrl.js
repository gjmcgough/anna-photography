var app = angular.module('annaPhotography');

app.controller('MainCtrl', [
'$scope',
'galleries',
function($scope, galleries){
  $scope.galleries = galleries.galleries;
//   $scope.galleries = [
//   {title: 'gallerie 1'},
//   {title: 'gallerie 2'},
//   {title: 'gallerie 3'},
//   {title: 'gallerie 4'},
//   {title: 'gallerie 5'}
// ];

  $scope.makeGallery = function(){
    if(!$scope.title || $scope.title === '') {return;}
    galleries.create({
      title: $scope.title,
    });
    $scope.title = '';
  };

   $scope.data = {
    model: null,
    availableOptions: $scope.galleries
   };
}]);
