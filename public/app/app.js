(function(){
	'use strict';
angular.module('StartUp',[
    'ngMessages',
	'ui.router',
	'ngResource'
	])
.config(config)
.constant("API","http://localhost:25956/REST_JAVA");
config.$inject=['$urlRouterProvider']
function config($urlRouterProvider){
	$urlRouterProvider
	.otherwise('/');
}
})();