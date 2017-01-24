app = angular.module("app",[]);
app.controller('main', ['$scope', function($scope){

	$scope.name="here";

	$scope.date = new Date('2/1/2016');

}])


app.directive('cal', function(){

	var directive = {};

	directive.restrict = 'E';

	directive.templateUrl = "/assets/template.html";

	directive.scope = {
		date : "=date"
	};

	directive.controller = function($scope){
		$scope.name = 'the name';
		var d = $scope.date;
		var m = (d.getMonth()+2)%12;
		if(m==1){
			d =  new Date(m+'/1/'+(d.getFullYear()+1));
		}
		d = new Date(m+'/1/'+d.getFullYear());
		d.setDate(d.getDate()-1);
		d = d.getDate();
		$scope.days = d;

		d = $scope.date;
		$scope.d = d.getDay();
	}

	return directive;

});