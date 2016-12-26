var app = angular.module('annaPhotography');

app.factory('galleries', [
  '$http',
  function($http){
  var o = {
    galleries: [],
    images: [],
    cover_images: []
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

o.getGallery = function(id){
  return $http.get('/galleries/' + id + '.json').then(function(res){
    return res.data;
  });
};

o.getImages = function(id){
  return $http.get('/galleries/' + id + '/images.json').success(function(data){
    angular.copy(data, o.images);
  });
};

o.getCoverImages = function(){
  return $http.get('/cover_images.json').success(function(data){
    angular.copy(data, o.cover_images);
  });
};

return o;

}]);
