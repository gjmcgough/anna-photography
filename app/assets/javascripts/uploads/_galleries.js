var app = angular.module('annaPhotography');

app.factory('galleries', [
  '$http',
  function($http){
  var o = {
    galleries: []
 };

 o.getGalleries = function() {
   return $http.get('/galleries.json').success(function(data){
     angular.copy(data, o.galleries);
   });
 };

 o.create = function(gallery) {
  return $http.post('/galleries.json', gallery).success(function(data){
    o.galleries.push(data);
  });
};

 return o;
}])
