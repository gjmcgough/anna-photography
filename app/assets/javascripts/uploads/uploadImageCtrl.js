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
    $scope.src = 'https://s3-us-west-1.amazonaws.com/anna-lizano-photo/images/images/000/000/039/original/Screen_Shot_2016-11-15_at_4.03.31_PM.png';
    console.log($scope.src);
    console.log($scope.images[0].image_file_name);
    console.log($stateParams.image_file_name);

    $scope.upload = function(file){
      Upload.upload({
        url: '/galleries/' + gallery.id + '/images.json',
        method: 'POST',
        fields: {
          'image[gallery_id]': gallery.id,
          'image[cover_image]': false,
          'image[image]': file
        },
        file: file,
        // fileFormDataName: 'image[image]'
      });
    };



}]);
