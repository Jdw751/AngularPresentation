var budget = angular.module('BudgetApp', ['ng-currency']);


budget.controller('BudgetCtrl', function($scope) {
    $scope.BudgetSheet = [];
    $scope.Section = [{rowName:'Num One'}];

    $scope.rowDifference = function(budgetInput, actualInput){

    	var rowNetTotal = (budgetInput - actualInput);

    	console.log(rowNetTotal);

		return rowNetTotal;
		};

	$scope.addSection = function () {//not complete

           
        $scope.BudgetSheet.push({sectionName:'New Section'});
                
            
            
         	
         };
    $scope.addRow = function () {//not complete

        
            $scope.Section.push({rowName:'New Row'});
                
            console.log($scope.Section);
            
         	
         };
    


});



