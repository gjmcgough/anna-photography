var app = angular.module('annaPhotography', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.image = 'img/Corgi.png';
}]);
$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];
