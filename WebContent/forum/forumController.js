	app.controller("forumController", function($scope, $http, $location) {
		
	function fetchAllForum() {
		console.log("fetching all forum");
		$http.get("http://localhost:8086/CollaborationBackend/getAllForums")

		.then(function(response) {
			$scope.forumdata = response.data;
			console.log("data fetched from forum");
		});

	}
	;
	fetchAllForum();
	$scope.insertForum = function() {
		console.log('entered insertForum');
		$http.post('http://localhost:8086/CollaborationBackend/insertForum',
				$scope.forum).then(fetchAllForum(), function(response) {
			console.log("successful forum entered");
			/*$location.path("/forum")*/
		});
	}
	$scope.deleteForum=function(forumId)
	{
		console.log("forum deleted");
		$http.get("http://localhost:8086/CollaborationBackend/deleteForum/"+forumId)
		.success(fetchAllForum(),function(response){
			console.log('successful deletion');
			$scope.refresh();
	/*		$location.path("/forum");*/
		});
	};
	
	$scope.editForum=function(forumId)
	{
		console.log('Entering to the edit forum ');
		$http.get('http://localhost:8086/CollaborationBackend/editForum/'+forumId)
		.success(fetchAllForum(),function(response)
				{
				console.log('Editing');
				$scope.forum=response.data;
				console.log($scope.forum);
				$location.path("/forum");
				});	
	}
	
});
