angular
.module('myApp', [])
.controller('myCtrl',
		function($scope, $interval, $window, $http, $sce) {
		
		$scope.options = ['one','two','three','four','five'];
		
		$scope.validateregister = function(){
			if($scope.username == undefined || $scope.username == "" || $scope.email == undefined || $scope.email == ""){
				alert('hello');
			}
			if($scope.phone == undefined || $scope.phone == "" || $scope.password == undefined || $scope.password == "" || 				$scope.repassword == undefined || $scope.repassword == ""){
				alert('hello');
			}
		};
		
		});
