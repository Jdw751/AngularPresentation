var app = angular.module("mainApp",['ngRoute','BMIApp','ToDoApp']);
var bodyMassIndex = angular.module('BMIApp',[]);
var toDo = angular.module('ToDoApp',[]);

//var budget = angular.module('BudgetApp',[]);

app.controller('headCtrl', function($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});

app.config(function($routeProvider) {
	$routeProvider
	// .when('/', {
	// 	templateUrl: 'index.html'
		
	// })
	.when('/BMI', {
		templateUrl: 'BMI.htm',
		controller: 'BMICtrl'
	})
	
	.when('/ToDoList', {
		templateUrl: 'ToDoList.html',
		controller: 'ToDoCtrl'
	})
	// .when('/Budget', {
	// 	templateUrl: 'Budget.html',
	// 	controller: 'BudgetCtrl'
	// })
});


