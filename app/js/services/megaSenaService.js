angular.module('myApp').service('MegaSenaService', [
  '$http',
  function($http) {
    console.log("MegaSenaService initialized");
    return {
      getResults: function() {
        return $http.get('/app/assets/mega_sena_results.json').then(function(response) {
          return response.data;
        }).catch(function(error) {
          return console.error("Error loading JSON:",
  error);
        });
      }
    };
  }
]);
