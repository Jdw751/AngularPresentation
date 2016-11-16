var budget = angular.module('BudgetApp', []);


budget.controller('BudgetCtrl', function($scope) {
    $scope.BudgetSheet = [];
    $scope.Section = [];

    $scope.rowDifference = function(budgetInput, actualInput){

    	var rowNetTotal = (budgetInput - actualInput);

    	console.log(rowNetTotal);

	return rowNetTotal;
};
    


});



budget.$inject = ['$scope'];


budget
// allow you to format a text input field.
// <input type="text" ng-model="test" format="number" />
// <input type="text" ng-model="test" format="currency" />
.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            elem.bind('blur', function(event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
            });
        }
    };
 }]);