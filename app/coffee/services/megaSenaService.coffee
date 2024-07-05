angular.module('myApp').service('MegaSenaService', ['$http', ($http) ->
  console.log "MegaSenaService initialized"
  return {
    getResults: ->
      
      $http.get('/app/assets/mega_sena_results.json').then(
        (response) ->
         
          response.data
      ).catch(
        (error) -> console.error("Error loading JSON:", error)
      )
  }
])
