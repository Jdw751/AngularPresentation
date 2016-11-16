var budget = angular.module('BudgetApp', ['ng-currency']);


budget.controller('BudgetCtrl', function($scope) {
    $scope.BudgetSheet = [];
    $scope.Section = [];

    $scope.rowDifference = function(budgetInput, actualInput){

    	var rowNetTotal = (budgetInput - actualInput);

    	console.log(rowNetTotal);

	return rowNetTotal;
};
    


});



