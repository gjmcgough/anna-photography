var app = angular.module('annaPhotography');

app.controller('UploadImageCtrl', [
  '$scope',
  'galleries',
  'gallery',
  'Upload',
  function($scope, galleries, gallery, Upload){
    $scope.gallery = gallery;
    // $scope.images = images.images;
    $scope.upload = function(file){
      Upload.upload({
        url: '/galleries/' + gallery.id + '/images',
        method: 'POST',
        fields: {
          'image[gallery_id]': gallery.id,
          'image[cover_bool]': false,
        },
        file: file,
        fileFormDataName: 'image[image]'
      });
    };
}]);
