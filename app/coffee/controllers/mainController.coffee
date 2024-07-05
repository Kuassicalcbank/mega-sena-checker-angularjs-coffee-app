angular.module('myApp').controller('MainController', ['$scope', 'MegaSenaService', '$timeout', '$sce', ($scope, MegaSenaService, $timeout, $sce) ->
  console.log("MainController initialized")
  console.log("MegaSenaService:", MegaSenaService)

  $scope.formKey = 'formKey'
  $scope.numbersController = []
  $scope.userNumbers = []
  $scope.megaSenaResults = []
  $scope.matchingResults = []
  $scope.verified = false
  $scope.isTableVisible = false

  $scope.init = ->
    $scope.loadMegaSenaResults()

  $scope.loadMegaSenaResults = ->
    MegaSenaService.getResults().then (data) ->
      $timeout ->
        
        $scope.megaSenaResults = data
       
    .catch (error) ->
      
  $scope.toggleNumber = (number) ->
      if $scope.userNumbers.includes(number)
        $scope.userNumbers = $scope.userNumbers.filter (n) -> n != number
      else
        if $scope.userNumbers.length < 15
          $scope.userNumbers.push number

  $scope.isSelected = (number) ->
      return $scope.userNumbers.includes(number)

  $scope.checkNumbers = ->
    if $scope.userNumbers.length >= 6 and $scope.userNumbers.length <= 15
        userNumbers = $scope.userNumbers.slice().sort()
        $scope.matchingResults = $scope.megaSenaResults.filter (result) ->
          userNumbers.filter((number) -> number in result).length >= 4
        $scope.verified = true

  $scope.reset = ->
      $scope.userNumbers = []
      $scope.matchingResults = []
      $scope.verified = false

  $scope.toggleTableVisibility = ->
      $scope.isTableVisible = not $scope.isTableVisible

    $scope.init()
])
