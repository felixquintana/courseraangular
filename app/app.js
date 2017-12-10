(function () {
  'use strict';
angular.module('miPrimeraAplicacion', [])
.controller('MiPrimerControlador', function ($scope) {
  $scope.valor=0;
  $scope.lunch="";
  $scope.Message = "Button clicked."

  $scope.sayHello = function()  {

    //alert("hello");
    if ($scope.valor==0) return "";
    if ($scope.valor>0 && $scope.valor<4) return "Enjoy!";
    if ($scope.valor>=4) return "Too much!";
  };

  //var comma = ';';
  //  function splitString(stringToSplit, comma) {
  $scope.splitString = function(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
$scope.valor=0;
      console.log('The original string is: "' + stringToSplit + '"');
      console.log('The separator is: "' + separator + '"');
      console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
$scope.valor=arrayOfStrings.length;
//  alert($scope.valor);
      return (arrayOfStrings.length);
    }

});
})();
