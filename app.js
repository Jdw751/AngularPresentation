var app = angular.module("mainApp",['ngRoute','BMIApp','ToDoApp','BudgetApp']);
var bodyMassIndex = angular.module('BMIApp',[]);
var toDo = angular.module('ToDoApp',[]);
var budget = angular.module('BudgetApp');

app.config(function($routeProvider) {
	$routeProvider
	.when("/Home", {
		templateUrl: "index.html",
		controller: ""
	})
	.when("/BMI", {
		templateUrl: "BMI.html",
		controller: "BMICtrl"
	})
	
	.when("/ToDoList", {
		templateUrl: "ToDoList.html",
		controller: "ToDoCtrl"
	})
	.when("/Budget", {
		templateUrl: "Budget.html",
		controller: "BudgetCtrl"
	})
});
