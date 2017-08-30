app.controller("loginController",["$scope","$rootScope",function($scope,$rootScope){
	
	$scope.jump = $rootScope.jump;

	 $scope.sub = function (a) {
          console.log('a ==> ', a);
        }

}])