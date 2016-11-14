var toDo = angular.module('ToDoApp');


	toDo.controller('ToDoCtrl', function ($scope){
		$scope.list = [];// to do list
        $scope.compeletedList = []; // history of completed items


        $scope.addToList = function () {

            if($scope.listItem !=null && $scope.listItem !=''){
                $scope.list.push({item:$scope.listItem, compeleted:false});
                $scope.listItem ='';
            }
            
         	
         };

        $scope.removeFromList = function(index)
        {

            $scope.list.splice(index,1);

        	
        };
        $scope.removeFromCompleteList = function(index)
        {

            $scope.compeletedList.splice(index,1);

            
        };

        $scope.compeleteTask = function(index)
        {
             $scope.compeletedTask = $scope.list.splice(index,1);   
             $scope.compeletedList.push({item:$scope.compeletedTask[0].item, completed:true});

        };

        $scope.returnToList = function(index)
        {
            
            $scope.returnedTask = $scope.compeletedList.splice(index,1);          
            $scope.list.push({item:$scope.returnedTask[0].item, completed:false});
             

        };

        
});



         
 
   
