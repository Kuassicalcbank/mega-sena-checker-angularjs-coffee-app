angular.module('myApp').config([
  '$routeProvider',
  function($routeProvider) {
    return $routeProvider.when('/',
  {
      templateUrl: 'app/views/main.html',
      controller: 'MainController'
    }).when('/other',
  {
      templateUrl: 'app/views/other.html',
      controller: 'OtherController'
    }).otherwise({
      redirectTo: '/'
    });
  }
]);
