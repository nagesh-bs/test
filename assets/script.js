app = angular.module("app",['calendar']);
app.controller('main', ['$scope', function($scope){

	$scope.date = new Date('9/1/2017');

}]);