app.controller('outcome_controller', ['$scope', '$http', function($scope, $http)	{
	
	$scope.provinces = [
	        {
	        	id: 'NL',
	        	name: 'Newfoundland and Labrador',
	        }
	    ],
	$scope.courses = [
		    {
		    	id: 'MA',
				name: 'Mathematics'
			},
			{
				id: 'SC',
				name: 'Science'
			},
			{
				id: 'SS',
				name: 'Social Studies'
			},
			{
				id: 'H',
				name: 'Health'
			},
			{
				id: 'RE',
				name: 'Religious Education'
			},
			{
				id: 'T',
				name: 'Technology'
			},
			{
				id: 'LA',
				name: 'Language Arts'
			},
			{
				id: 'A',
				name: 'Art'
			},
			{
				id: 'MU',
				name: 'Music'
			},
			{
				id: 'PE',
				name: 'Physical Education'
			}
		],
	$scope.add = function()	{
		//why is it not creating that object? but thats teh way to do it, on the other side you can do req.body.province, etc.
		//ahh i see... well the .value property isnt defined for angular stuff as far as I can tell. I've never been able to use .value
		//okay lets see
		// this is weird, is that how you had it?
		// uhhhhhhhhhhhh........ nope. i just mean to get the data, not how you had it in an array
		// OOH yes that the wasy
		//the wasy...  its working as intended now, just need to get the select values correctly.
		
		var info = {
				province: $scope.province_select,
				course: $scope.course_select
		};
		console.log(info);
		$http.post('./add', JSON.stringify(info)).success(function(data, status){
			console.log('Post Requested');
		});
	}
}]);