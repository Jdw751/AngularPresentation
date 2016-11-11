var bodyMassIndex = angular.module('BMIApp');

bodyMassIndex.controller("BMICtrl", function($scope){
	

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



	$scope.calculateBmiMetric = function (heightMeters, weightKg){

		var bmi = 0.0;
		bmi = (weightKg/(heightMeters * heightMeters));

		var category = $scope.result(bmi);
		var results = {bmi: bmi, result:category};
		
		return results;

	};

	$scope.calculateBmiImperial = function (heightFeet,heightInches,weightLb){

		var bmi = 0.0;
		var metricHeight = $scope.convertHeight(heightFeet,heightInches);
		var metricWeight = $scope.convertWeight(weightLb);
		var results = $scope.calculateBmiMetric(metricHeight,metricWeight);
		
		return results;

	};
	$scope.result = function(gottenBMI){

		var result ="";

		if(gottenBMI < 15.0){
			result = "Very severely underweight";
		}
		else if (gottenBMI > 15.0 && gottenBMI < 16.0 ) {
			result = "severely underweight";
		}
		else if (gottenBMI > 16.0 && gottenBMI < 18.5 ) {
			result = "underweight";
		}
		else if (gottenBMI > 18.5 && gottenBMI < 25 ) {
			result = "Normal weight";
		}
		else if (gottenBMI > 25 && gottenBMI < 30 ) {
			result = "overweight";
		}
		else if (gottenBMI > 30 && gottenBMI < 35 ) {
			result = "moderately obese";
		}
		else if (gottenBMI > 35 && gottenBMI < 40 ) {
			result = "severely obese";
		}
		else if (gottenBMI > 40 ) {
			result = "very severely obese";
		}
		else{
			result = "none";		
		}

		return result;

	};


});