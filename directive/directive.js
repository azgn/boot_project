app.directive('bottomDirective',["$rootScope","$state",function($rootScope,$state){
	return{
		restrict: 'ECMA',
		replace: true,
		templateUrl: "./view/a.html",

		link: function($scope,$element,$attr){

			var url = window.location.href.split('/').pop();
			console.log(url);

			$scope.imgUrl = ['./image/home-red.png','./image/feng.png','./image/shop.png','./image/zhongxin.png'];

			$scope.fontUrl = ['active','','',''];

			if($scope.imgUrl == undefined || $scope.fontUrl == undefined){
					$scope.imgUrl = $scope.imgUrl;
					$scope.fontUrl = $scope.fontUrl;
				}

			$rootScope.jump = function(url){
				console.log('url ==> ',url);
				if(url != undefined && url != ''){
						
				}else{
					throw new Error('没有传递参数').message;
				}

				switch(url){
					case "footer.home":
						$scope.imgUrl = ['./image/home-red.png','./image/feng.png','./image/shop.png','./image/zhongxin.png'];
						$scope.fontUrl = ['active','','',''];
						break;

					case "footer.class":
						$scope.imgUrl = ['./image/home.png','./image/feng-red.png','./image/shop.png','./image/zhongxin.png'];
						$scope.fontUrl = ['','active','',''];
						break;

					case "footer.shop":
						$scope.imgUrl = ['./image/home.png','./image/feng.png','./image/shop-red.png','./image/zhongxin.png'];
						$scope.fontUrl = ['','','active',''];
						break;

					case "footer.personcenter":
						$scope.imgUrl = ['./image/home.png','./image/feng.png','./image/shop.png','./image/zhongxin-red.png'];
						$scope.fontUrl = ['','','','active'];
						break;
					}


				$state.go(url);
			}

			

			
			

			// var homefont = angular.element(document.querySelectorAll('.footer-img>a')[0]);
			// var homeimg = angular.element(document.querySelectorAll('.footer-img>a img')[0]);
			
			// homefont.attr('class','active');
			// homeimg.attr('src','./image/home-red.png');

			// $rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/home-red.png','active',0);

			// $rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/feng.png','',1);

			// $rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/shop.png','',2);

			// $rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/zhongxin.png','',3);

			for(var i = 0; i < document.querySelectorAll('.footer-img>a'); i++){
				console.log("1111");
			}
			// 
			
		}
	}
}])

// app.directive('cls',["$rootScope",function($rootScope){
// 	return{
// 		restrict: 'ECMA',
// 		replace: true,

// 		link: function($scope,$element,$attr){

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/home.png','',0);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/feng-red.png','active',1);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/shop.png','',2);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/zhongxin.png','',3);
			
			
// 		}
// 	}
// }])

// app.directive('shopfooter',["$rootScope",function($rootScope){
// 	return{
// 		restrict: 'ECMA',
// 		replace: true,

// 		link: function($scope,$element,$attr){

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/home.png','',0);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/feng.png','',1);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/shop-red.png','active',2);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/zhongxin.png','',3);
	
// 		}
// 	}
// }])

// app.directive('personfooter',["$rootScope",function($rootScope){
// 	return{
// 		restrict: 'ECMA',
// 		replace: true,

// 		link: function($scope,$element,$attr){

// 			templateUrl: "./view/headfooter.html";

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/home.png','',0);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/feng.png','',1);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/shop.png','',2);

// 			$rootScope.get(['.footer-img>a','.footer-img>a img'],'./image/zhongxin-red.png','active',3);

// 			// var homefont = angular.element(document.querySelectorAll('.footer-img>a')[0]);
// 			// var homeimg = angular.element(document.querySelectorAll('.footer-img>a img')[0]);
			
// 			// homefont.attr('class','');
// 			// homeimg.attr('src','./image/home.png');

// 			// var classfont = angular.element(document.querySelectorAll('.footer-img>a')[1]);
// 			// var classimg = angular.element(document.querySelectorAll('.footer-img>a img')[1]);
			
// 			// classfont.attr('class','');
// 			// classimg.attr('src','./image/feng.png');
			
// 			// var shopfont = angular.element(document.querySelectorAll('.footer-img>a')[2]);
// 			// var shopimg = angular.element(document.querySelectorAll('.footer-img>a img')[2]);
			
// 			// shopfont.attr('class','');
// 			// shopimg.attr('src','./image/shop.png');

// 			// var personfont = angular.element(document.querySelectorAll('.footer-img>a')[3]);
// 			// var personimg = angular.element(document.querySelectorAll('.footer-img>a img')[3]);
			
// 			// personfont.attr('class','active');
// 			// personimg.attr('src','./image/zhongxin-red.png');
			
// 		}
// 	}
// }])
