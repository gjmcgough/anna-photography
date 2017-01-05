var app = angular.module('annaPhotography');

app.controller('NewGalleryCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.galleries = galleries.galleries;
    $scope.images = galleries.images;

    $scope.makeGallery = function(){
      if(!$scope.title || $scope.title === '') {return;}
      galleries.create({
        title: $scope.title,
      });
      $scope.title = '';
    };

    $scope.delete = function(index){
      var objectToDelete = $scope.galleries[index];

      if(confirm("Are you sure you want to delete this gallery?")){
        galleries.delete(objectToDelete.id)
          .success(function(data){
            $scope.galleries = data;
        });
      };
    };
}]);
