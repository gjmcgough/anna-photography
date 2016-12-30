var app = angular.module('annaPhotography');

app.controller('TeleportCtrl', [
  '$scope',
  'galleries',
  function($scope, galleries){
    $scope.galleries = galleries.galleries;
    $scope.cover_images = galleries.cover_images;
    console.log($scope.galleries);
    $scope.home_image = galleries.cover_images[2];

    // var dataArray = [];
    // var valueArray = [];
    // this.repeatData = dataArray.map(function(value, index) {
    //     return {
    //         data: value,
    //         value: valueArray[index]
    //     }
    // });

}]);
