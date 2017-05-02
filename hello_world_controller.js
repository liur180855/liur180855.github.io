angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope) {
        
        $scope.message = "";
        $scope.booking = function(){
            $scope.message = "we are picking you are at "+ $scope.pickup +" and drop you off at " 
            +$scope.destination+ " on "+ document.getElementById('daterange').value+ " " +$scope.selectedTime+"am";
        }
});