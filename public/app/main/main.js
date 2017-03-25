(function(){
'use strict';
angular.module('StartUp')
.config(config);

config.inject = ['$stateProvider'];
function config($stateProvider){
	$stateProvider
	.state('main',{
		url:'/',
		template:'<main></main>'
	})
}
})();