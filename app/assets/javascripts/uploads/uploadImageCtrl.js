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
    $scope.image = $scope.images[3]
    $scope.src = 'https://s3.amazonaws.com/anna-lizano-photo/images/images/000/000/009/med/alpacayawn.jpg';
    $scope.coverBool = false
    console.log("https:" + $scope.image.src)
    // console.log($scope.images[0].image_file_name);
    // console.log($stateParams.image_file_name);

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
        // fileFormDataName: 'image[image]'
      });
    };



}]);
