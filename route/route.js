app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise("/lead1");

	$stateProvider
		.state('lead1',{
			url: "/lead1",
			templateUrl: "./view/lead1.html",
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('lead');
				}]
			}
		})

		.state('lead2',{
			url: "/lead2",
			templateUrl: "./view/lead2.html",
			resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('lead');
				}]
			}
		})

		.state('lead3',{
			url: '/lead3',
			templateUrl: "./view/lead3.html",
			resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('lead');
				}]
			}
		})

		.state('login',{
			url: '/login',
			templateUrl: "./view/login.html",
			controller: "loginController",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('login')
				}]
			}
		})

		// .state('home.footer',{
		// 	url: '/home/footer',
		// 	controller: 'footerController',
		// 	templateUrl: './view/headfooter.html',
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('footer')
		// 		}]
		// 	}

		// })

		.state('zhuce',{
			url: '/zhuce',
			templateUrl: "./view/zhuce.html",
			controller: "zhuceController",
			resolve:{
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('zhuce')
				}]
			}
		})

		// .state('class',{
		// 	url: '',
		// 	abstract: true,
		// 	templateUrl: "./view/class.html",
		// 	controller: "classController",
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('class')
		// 		}]
		// 	}
		// })

		// //分类子路由
		// .state('class.footer',{
		// 	url: '/class/footer',
		// 	controller: 'footerController',
		// 	templateUrl: './view/headfooter.html',
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('footer')
		// 		}]
		// 	}

		// })

		.state('comment',{
			url: '/comment',
			templateUrl: "./view/comment.html",
			controller: "commentController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('comment')
				}]
			}
		})

		.state('details',{
			url: '/details',
			templateUrl: "./view/details.html",
			controller: "detailsController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('details')
				}]
			}
		})

		.state('fahuo',{
			url: '/fahuo',
			templateUrl: "./view/fahuo.html",
			controller: "fahuoController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('fahuo')
				}]
			}
		})

		.state('order',{
			url: '/order',
			templateUrl: "./view/order.html",
			controller: "orderController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('order')
				}]
			}
		})

		.state('pay',{
			url: '/pay',
			templateUrl: "./view/pay.html",
			controller: "payController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('pay')
				}]
			}
		})

		// .state('personcenter',{
		// 	url: '',
		// 	abstract: true,
		// 	templateUrl: "./view/personcenter.html",
		// 	controller: "personcenterController",
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('personcenter')
		// 		}]
		// 	}
		// })

		// .state('personcenter.footer',{
		// 	url: '/personcenter/footer',
		// 	controller: 'footerController',
		// 	templateUrl: './view/headfooter.html',
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('footer')
		// 		}]
		// 	}

		// })

		.state('receiving',{
			url: '/receiving',
			templateUrl: "./view/receiving.html",
			controller: "receivingController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('receiving')
				}]
			}
		})

		.state('setting',{
			url: '/setting',
			templateUrl: "./view/setting.html",
			controller: "settingController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('setting')
				}]
			}
		})

		.state('start',{
			url: '/start',
			templateUrl: "./view/start.html",
			controller: "startController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('start')
				}]
			}
		})

		.state('tuikuan',{
			url: '/tuikaun',
			templateUrl: "./view/tuikuan.html",
			controller: "tuikuanController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('tuikaun')
				}]
			}
		})

		.state('wait',{
			url: '/wait',
			templateUrl: "./view/wait.html",
			controller: "waitController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('wait')
				}]
			}
		})

		.state('xingxi',{
			url: '/xingxi',
			templateUrl: "./view/xingxi.html",
			controller: "xingxiController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('xingxi')
				}]
			}
		})

		.state('footer',{
			url:'',
			abstract: true,
			templateUrl: "./view/headfooter.html",
			controller:"footerController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('footer')
				}]
			}
		})

		.state('footer.home',{
			url: '/footer/home',
			templateUrl: "./view/home.html",
			controller: "homeController",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('home')
				}]
			}
		})

		.state('footer.class',{
			url: '/footer/class',
			templateUrl: "./view/class.html",
			controller: "classController",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('class')
				}]
			}
		})

		.state('footer.shop',{
			url: '/footer/shop',
			templateUrl: "./view/shop.html",
			controller: "shopController",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('shop')
				}]
			}
		})

		.state('footer.personcenter',{
			url: '/footer/personcenter',
			templateUrl: "./view/personcenter.html",
			controller: "personcenterController",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('personcenter')
				}]
			}
		})

		
		// .state('shop',{
		// 	url: '',
		// 	abstract: true,
		// 	templateUrl: "./view/shop.html",
		// 	controller: "shopController",
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('shop')
		// 		}]
		// 	}
		// })

		// //购物车子路由
		// .state('shop.footer',{
		// 	url: '/shop/footer',
		// 	controller: 'footerController',
		// 	templateUrl: './view/headfooter.html',
		// 	resolve:{
		// 		des:['$ocLazyLoad',function($ocLazyLoad){
		// 			return $ocLazyLoad.load('footer')
		// 		}]
		// 	}

		// })
}])