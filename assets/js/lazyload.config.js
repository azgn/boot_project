(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'lead',
		 			files: [
		 				"./controller/rootcontroller.js"
		 			]
		 		},

		 		{
		 			name: 'login',
		 			files: [
		 				"./controller/loginController.js",
		 				

		 			]
		 		},

		 		{
		 			name: 'home',
		 			files: [
		 				"./controller/homeController.js"
		 			]
		 		},

		 		{
		 			name: 'zhuce',
		 			files: [
		 				"./controller/zhuceController.js",
		 			]
		 		},

		 		{
		 			name: 'class',
		 			files: [
		 				"./controller/classController.js"
		 			]
		 		},

		 		{
		 			name: 'comment',
		 			files: [
		 				"./controller/commentController.js"
		 			]
		 		},

		 		{
		 			name: 'details',
		 			files: [
		 				"./controller/detailsController.js"
		 			]
		 		},

		 		{
		 			name: 'fahuo',
		 			files: [
		 				"./controller/fahuoController.js"
		 			]
		 		},

		 		{
		 			name: 'order',
		 			files: [
		 				"./controller/orderController.js"
		 			]
		 		},

		 		{
		 			name: 'pay',
		 			files: [
		 				"./controller/payController.js"
		 			]
		 		},

		 		{
		 			name: 'personcenter',
		 			files: [
		 				"./controller/personcenterController.js"
		 			]
		 		},

		 		{
		 			name: 'receiving',
		 			files: [
		 				"./controller/receivingController.js"
		 			]
		 		},

		 		{
		 			name: 'setting',
		 			files: [
		 				"./controller/settingController.js"
		 			]
		 		},

		 		{
		 			name: 'shop',
		 			files: [
		 				"./controller/shopController.js"
		 			]
		 		},

		 		{
		 			name: 'start',
		 			files: [
		 				"./controller/startController.js"
		 			]
		 		},

		 		{
		 			name: 'tuikaun',
		 			files: [
		 				"./controller/tuikuanController.js"
		 			]
		 		},

		 		{
		 			name: 'wait',
		 			files: [
		 				"./controller/waitController.js"
		 			]
		 		},

		 		{
		 			name: 'xingxi',
		 			files: [
		 				"./controller/xingxiController.js"
		 			]
		 		},

		 		{
		 			name: 'footer',
		 			files: [
		 				"./controller/footerController.js"
		 			]
		 		},

		 		
		 		

	 		]
 		});
	}]);
	
})();