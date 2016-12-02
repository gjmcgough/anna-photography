var app = angular.module('annaPhotography');

app.controller('MainCtrl', [
'$scope',
'galleries',
function($scope){
  $scope.galleries = galleries.galleries;

  $scope.makeGallery = function(){
    $scope.galleries.push({title: 'Zimbabwe!'});
  };

   $scope.data = {
    model: null,
    availableOptions: $scope.galleries
   };
}]);
