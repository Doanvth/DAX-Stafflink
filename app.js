var app = angular.module("myApp", ["ngRoute"]);
var API = "http://localhost:3000/";

app.controller("getController", getController);

function getController($scope, $http) {
  $http({
    method: "GET",
    url: API + "newsroom",
  }).then(function (response) {
    console.log(printDate(response.date));
    $scope.newsroom = response.data;
  });
}

function printDate(date) {
  const myArray = text.split(" ");
  let word = myArray[0];
}
