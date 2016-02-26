/* angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.students = [
     {"Name":"Qwerty",  "id":"1"},
    { "Name":"xyz",      "id":"2"},
    {"Name":"madhuri",  "id":"3"}
    ];
});*/

angular.module('myApp', []).controller('myCtrl', function($scope,$http) {
	$http.get('C:/Users/Madhuri/Desktop/students.json').then(function(data){
		$scope.students = data.data.records;
	});

});

   
 


