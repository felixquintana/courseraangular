(function () {
  'use strict';
angular.module('miPrimeraAplicacion', [])
.controller('MiPrimerControlador', function ($scope) {
  $scope.name="Felix";
  $scope.sayHello = function()  {
    return "Hello Coursera Script";

  };
});
})();
