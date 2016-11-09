var app = angular.module("mainApp",['ngRoute','BMIApp']);
// var bodyMassIndex = angular.module('BMIApp',[]);
//var toDo = angular.module('ToDoApp',[]);
//var budget = angular.module('BudgetApp',[]);



app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
		
	})
	.when('/BMI', {
		templateUrl: 'BMI.htm',
		controller: 'BMICtrl'
	})
	
	// .when('/ToDoList', {
	// 	templateUrl: 'ToDoList.htm',
	// 	controller: 'ToDoCtrl'
	// })
	// .when('/Budget', {
	// 	templateUrl: 'Budget.html',
	// 	controller: 'BudgetCtrl'
	// })
});


