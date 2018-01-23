app.controller("ChatController", function($scope,$rootScope,chatService)
{
	$scope.messages=[];
	$scope.message="";
	$scope.max=140;
	
	$scope.addMessage=function()
	{
		console.log('Add Message Called');
		chatService.send($rootScope.currentUser.username+":" +$scope.message);
		$scope.message="";
	};

	chatService.receive().then(null,null,function(message)
	{ 
		console.log('Receive Message Called');
		$scope.messages.push(message);
	});	

});