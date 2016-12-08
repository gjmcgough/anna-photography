var app = angular.module('annaPhotography');

app.factory('galleries', [
  '$http',
  function($http){
  var o = {
    galleries: [],
    images: []
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

o.get = function(id){
  return $http.get('/galleries/' + id + '.json').then(function(res){
    return res.data;
  });
};

o.getImages = function(id){
  return $http.get('/galleries/' + id + '/images.json')
    .then(function(response){
      return response.data
  });
};

 return o;
}])
