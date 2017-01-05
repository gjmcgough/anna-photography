var app = angular.module('annaPhotography');

app.controller('NewGalleryCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.galleries = galleries.galleries;
    $scope.images = galleries.images;
    $scope.gallery = $(this);
    console.log($scope.gallery)

    $scope.makeGallery = function(){
      if(!$scope.title || $scope.title === '') {return;}
      galleries.create({
        title: $scope.title,
      });
      $scope.title = '';
    };

    $scope.deleteGallery = function(index){
      var gallery_to_delete = $scope.galleries[index];
      if(confirm("Are you sure you want to delete this gallery?")){
          galleries.delete(gallery_to_delete.id)
      }
    };

}]);
