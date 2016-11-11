var bodyMassIndex = angular.module('BMIApp');

bodyMassIndex.controller("BMICtrl", function($scope){
	//$scope.msg ="Here be BMI";

	

	$scope.convertHeight = function(heightFeet,heightInches){
		var inchesTotal = 0;
		var meters = 0 ;

		inchesTotal += (heightFeet * 12);//convert feet to inchces add to total
		inchesTotal += heightInches;// add inches to total
		meters = (inchesTotal * 0.0254);//convert inches to meters
		
		return meters;

	};

	$scope.convertWeight = function(weightLb){
		var kgTotal = 0;
		var poundToKg = 0.45359237;

		kgTotal += (weightLb * poundToKg);//convert pounds to kilograms
		
		return kgTotal;

	};



	$scope.calculateBmiMetric =function (heightMeters, weightKg){
		var bmi = 0.0;
		
		bmi = (weightKg/(heightMeters * heightMeters));
		if (bmi == NaN){
			return 0;
		}
		return bmi;

	};

	$scope.calculateBmiImperial =function (heightFeet,heightInches,weightLb){
		var bmi = 0.0;
		var metricHeight = $scope.convertHeight(heightFeet,heightInches);
		var metricWeight = $scope.convertWeight(weightLb);

		bmi = $scope.calculateBmiMetric(metricHeight,metricWeight);
		
		
		return bmi;

	};
});