app.controller("FriendController", function($scope, $http, $location,$rootScope) 
	{
		$scope.friend={friendId:0,username:'',friendname:'',status:''};
		$scope.allFriendRequest;
	
		function fetchAllFriendRequests() 
		{
		console.log("fetched all friendRequests");
		$http.get("http://localhost:8086/CollaborationBackend/getAllFriendRequest")
		.then(function(response) 
			{
			$scope.allFriendRequest = response.data;
		/*	console.log($scope.currentUser.username);*/
			console.log($scope.allFriendRequest);
			});
		}
		
		fetchAllFriendRequests();
		
		$scope.approve=function(friendId)
		{
			console.log("approving friend request");
			$http.get("http://localhost:8086/CollaborationBackend/approvalFriendRequest/"+friendId)
			.success(function(response)
			{
				console.log("successfully approved");
/*				location.path("/showFriendRequest");
*/			});
			
		}
		$scope.reject=function(friendId)
		{
			console.log("rejecting the friend request");
			$http.get("http://localhost:8086/CollaborationBackend/rejectFriendRequest/"+friendId)
			.success(function(response){
				console.log("successfully rejected");
			/*	location.path("/showFriendRequest");*/
			});
		};
		$scope.addFriend=function()
		{
			console.log("sending friend request");
			$http.post("http://localhost:8086/CollaborationBackend/createFriendRequest",$scope.friend)
			.then(function(response){
				console.log("request send");
			});
			};
	});