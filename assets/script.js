app = angular.module("app",[]);
app.controller('main', ['$scope', function($scope){

	$scope.date = new Date('12/1/2017');

}])
 

app.directive('cal', function(){

	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "/assets/template.html";
	directive.scope = {
		date : "=date"
	};

	directive.controller = function($scope){
		var d = new Date($scope.date);
		var days = '- ';
		days = days.repeat(d.getDay());
		var last = new Date(d);
		last.setMonth(last.getMonth()+1);
		last.setDate(last.getDate()-1);
		last = last.getDate();
		for(i = 1;i<=last;i++){
			days=days+i+' ';
		}
		d = d.getDay();
		last+=d;
		if(last%7!=0){
			var dash = '- ';
			dash = dash.repeat((7-last%7));
			days = days + dash;
		}
		days = days.split(' ');
		days.pop();
		$scope.days = days;
	}

	return directive;

});