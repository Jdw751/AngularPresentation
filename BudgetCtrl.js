var budget = angular.module('BudgetApp', ['ng-currency']);


budget.controller('BudgetCtrl', function($scope) {
    $scope.BudgetSheet = [];
    $scope.Section = [];
    $scope.Row = [{rowName:'New Row',
        					budget:$scope.budgetInput,
        				    actual: $scope.actualInput,
        					difference: ($scope.budgetInput - $scope.actualInput)}];

    $scope.rowDifference = function(budgetInput, actualInput){

    	var rowNetTotal = (budgetInput - actualInput);

    	

		return rowNetTotal;
		};

	$scope.addSection = function () {//not complete

           
        $scope.BudgetSheet.push({sectionName:'New Section'});
                
            
            
         	
         };
    $scope.addRow = function (ones) {//not complete

        
            // $scope.Row.push({rowName:'New Row',budget:$scope.budgetInput, actual:$scope.actualInput, difference:($scope.budgetInput - $scope.actualInput)});
            $scope.Row.push({rowName:'New Row',
        					budget:$scope.budgetInput,
        				    actual: $scope.actualInput,
        					difference: budget-$scope.actualInput,
        				});
                
            
            
         	
         };
    

	console.log($scope.Row);
});



