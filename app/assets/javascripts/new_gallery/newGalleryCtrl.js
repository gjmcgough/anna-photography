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

    $scope.remove = function(ary, index) {
      ary.splice(index, 1);
    };

    $scope.deleteGallery = function(index){
      var galleryToDelete = $scope.galleries[index];

      if(confirm("Are you sure you want to delete this gallery?")){
        // console.log($scope.galleries[galleryToDelete.id]);
        // var elemntToRemove = $(this).parent();
        // console.log(elemntToRemove);

        galleries.delete(galleryToDelete.id)
          .success(function(data){
            // $(elemntToRemove).remove();
            // console.log($($scope.galleries[index]).html());
            console.log(data);
            $scope.galleries = data;
            // $scope.$apply();

        });
      };
    };
}]);
