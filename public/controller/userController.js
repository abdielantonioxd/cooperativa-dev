'use strict';
app.controller('userController', ['$scope', 'Dataservice', function ($scope, Dataservice) {
  /*################################################### */
  //                GLOBAL VAR ANGULAR JS 
  /*################################################### */
  $scope.newUser = false;
  $scope.listUser = true;
  $scope.seeNewUser = function () {
    $scope.newUser = true;
    $scope.listUser = false;
  }

}]);