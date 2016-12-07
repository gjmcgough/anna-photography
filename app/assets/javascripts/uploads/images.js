var app = angular.module('annaPhotography');

app.factory('images',[
  '$http',
  function($http){
    var o = {
      images: []
    };

    o.getImages = function(){
      return $http.get('/galleries/{id}/images.json').success(function(data){
        angular.copy(data, o.images);
      });
    };
  // 
  //   $scope.upload = function(file){
  //     Upload.upload({
  //       url: 'galleries/{id}/images',
  //       method: 'POST',
  //       fields: {
  //         'image[gallery_id]': $scope.gallery.id,
  //         'image[cover_bool]': $scope.cover_bool,
  //         'image[image]': file
  //       },
  //       file: file,
  //       sendFieldsAs: 'json'
  //   }).then(function (resp) {
  //     console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp.data);
  //   }, function (resp) {
  //     console.log('Error status: ' + resp.status);
  //   }, function (evt) {
  //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
  //     console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
  //   });
  // };

}]);
