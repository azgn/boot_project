app.controller("rootcontroller",["$rootScope","$state",function($rootScope,$state){
	$rootScope.jump = function(url){
		$state.go(url);
	}

	$rootScope.get = function(active,imgUrl,attrs,index){
		var font = angular.element(document.querySelectorAll(active[0])[index]);
		var img = angular.element(document.querySelectorAll(active[1])[index]);
		font.attr('class',attrs);
		img.attr('src',imgUrl);
	}

	
}])