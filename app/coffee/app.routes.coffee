angular.module('myApp').config(['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/', 
      templateUrl: 'app/views/main.html'
      controller: 'MainController'
    .when '/other', 
      templateUrl: 'app/views/other.html'
      controller: 'OtherController'
    .otherwise 
      redirectTo: '/'
])
