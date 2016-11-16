var app = angular.module('annaPhotography', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.image = '';
}]);

app.controller('ImageCtrl', [
  '$scope',
  function($scope){
    $scope.myImages = [
      {image: "Corgi.png", title: "Corgi"},
      {image: "secret-hideaway.png", title: "Hideaway"},
      {image: "llama.jpg", title: "Llama"},
      {image: "mex.jpg", title: "Mex"},
      {image: "surfing-1400X600.jpg", title: "Pittedddd"},
      {image: "rainbow_shave_ice_800.jpg", title: "Rainbow Shaved Ice"}
    ];

    // $scope.titles = ["Corgi", "Hideaway", "Llama", "Mexico", "Pittedddd"]

    $scope.getImagePath = function(imageName) {
      return  "../anna-photography/img/" + imageName;
    };

}]);
