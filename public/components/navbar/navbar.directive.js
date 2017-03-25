(function(){
	'use strict';
	angular.module('StartUp')
	.directive('navbar',navbar)

	function navbar(){
		return {
			restrict:'EA',
			templateUrl:'components/navbar/navbar.html'
		}
	}
})();


