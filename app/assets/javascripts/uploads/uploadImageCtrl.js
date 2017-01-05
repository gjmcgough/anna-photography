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

      if(confirm("Are you sure you want to delete this photo?")){
        $scope.images.deleteImg(objectToDelete.id, gallery.id)
          .success(function(data){
            $scope.images = data;
        });
      };
    };

}]);
