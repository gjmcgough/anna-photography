var app = angular.module('annaPhotography', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.image = '';
}]);

app.controller('ImageCtrl', [
  '$scope',
  function($scope){
    $scope.myImages = ["Corgi.png", "secret-hideaway.png", "llama.jpg", "mex.jpg", "surfing-1400X600.jpg", "rainbow_shave_ice_800.jpg"];
    $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getImagePath = function(imageName) {
      return  "../anna-photography/img/" + imageName;
    };

}]);
