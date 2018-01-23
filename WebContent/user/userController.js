app.controller("UserController", function($scope, $http, $location,$rootScope,$cookieStore) 
	{
	$scope.user={username:'',password:'',role:'',firstname:'',lastname:'',email:'',phone:'',status:''};
	$scope.allusers;
	
	function fetchAllUsers()
	{
		console.log("fetching all users");
		$http.get("http://localhost:8086/CollaborationBackend/getAllUsers")
		.then(function(response)
				{
					$scope.allusers=response.data;
				});
				};
		
		fetchAllUsers();
	$scope.register=function()
	{
		console.log("enter register");
		$http.post("http://localhost:8086/CollaborationBackend/register",$scope.user)
		.then(function(response)
				{
					console.log("successfully registered");
				/*	$location.path("/login");*/
				});
	}
	
	$rootScope.login=function()
	{
		console.log("login function");
		
		$http.post("http://localhost:8086/CollaborationBackend/login",$scope.user)
		.then(function(response){
			$scope.user=response.data;
			$scope.currentUser=response.data;
			$rootScope.currentUser=response.data;
			$cookieStore.put('currentUser',response.data);
			console.log($rootScope.currentUser.role);
	        $location.path("/");
		});
	}
	

	fetchAllUsers();
			
	$rootScope.logout=function()
	{
		console.log('logout function');
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser');
		$location.path("/logout");
	}
	
	
	/*fetchAllUsers();
	
	$http.get("http://localhost:8181/Collabaration/logout/userName")
	.then(function(response){

		console.log('logout function');
	
		$scope.user=response.data;
		$scope.currentUser=response.data;
		$rootScope.currentUser=response.data;
		
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser',response.data);
		console.log($rootScope.currentUser.role);
		$location.path("/logout");
	})*/
	
	
	});





