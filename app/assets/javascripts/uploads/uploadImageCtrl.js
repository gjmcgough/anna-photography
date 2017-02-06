var app = angular.module('annaPhotography');

app.controller('UploadImageCtrl', [
  '$scope',
  'galleries',
  'gallery',
  'Upload',
  '$stateParams',
  function($scope, galleries, gallery, Upload, $stateParams){
    $scope.gallery = gallery;
    $scope.images = galleries.images;
    $scope.coverBool = false;
    $scope.galleries = galleries.galleries;

    function isCoverImage(image) {
      return image.cover_image === true
    }

    $scope.coverImage = $scope.images.find(isCoverImage)


    $scope.upload = function(file){
      Upload.upload({
        url: '/galleries/' + gallery.id + '/images.json',
        method: 'POST',
        fields: {
          'image[gallery_id]': gallery.id,
          'image[cover_image]': $scope.coverBool,
          'image[image]': file
        },
        file: file,
      }).success(function(data){
        $scope.images = data;
      });
    };

    $scope.removeImage = function(index){
      var objectToDelete = $scope.images[index];
      console.log(galleries.images);
      if(confirm("Are you sure you want to delete this photo?")){
        galleries.deleteImg(objectToDelete.id, gallery.id)
          .success(function(data){
            $scope.images = data;
        });
      };
    };

}]);
