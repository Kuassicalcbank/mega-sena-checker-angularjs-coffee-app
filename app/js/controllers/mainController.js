var indexOf = [].indexOf;

angular.module('myApp').controller('MainController', [
  '$scope',
  'MegaSenaService',
  '$timeout',
  '$sce',
  function($scope,
  MegaSenaService,
  $timeout,
  $sce) {
    console.log("MainController initialized");
    console.log("MegaSenaService:",
  MegaSenaService);
    $scope.formKey = 'formKey';
    $scope.numbersController = [];
    $scope.userNumbers = [];
    $scope.megaSenaResults = [];
    $scope.matchingResults = [];
    $scope.verified = false;
    $scope.isTableVisible = false;
    $scope.init = function() {
      return $scope.loadMegaSenaResults();
    };
    $scope.loadMegaSenaResults = function() {
      return MegaSenaService.getResults().then(function(data) {
        return $timeout(function() {
          return $scope.megaSenaResults = data;
        });
      }).catch(function(error) {});
    };
    $scope.toggleNumber = function(number) {
      if ($scope.userNumbers.includes(number)) {
        return $scope.userNumbers = $scope.userNumbers.filter(function(n) {
          return n !== number;
        });
      } else {
        if ($scope.userNumbers.length < 15) {
          return $scope.userNumbers.push(number);
        }
      }
    };
    $scope.isSelected = function(number) {
      return $scope.userNumbers.includes(number);
    };
    $scope.checkNumbers = function() {
      var userNumbers;
      if ($scope.userNumbers.length >= 6 && $scope.userNumbers.length <= 15) {
        userNumbers = $scope.userNumbers.slice().sort();
        $scope.matchingResults = $scope.megaSenaResults.filter(function(result) {
          return userNumbers.filter(function(number) {
            return indexOf.call(result,
  number) >= 0;
          }).length >= 4;
        });
        return $scope.verified = true;
      }
    };
    $scope.reset = function() {
      $scope.userNumbers = [];
      $scope.matchingResults = [];
      return $scope.verified = false;
    };
    $scope.toggleTableVisibility = function() {
      return $scope.isTableVisible = !$scope.isTableVisible;
    };
    return $scope.init();
  }
]);
