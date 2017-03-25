(function(){
	'use strict';
	angular.module('StartUp')
	.directive('footer',footer)

	function footer(){
		return {
			restrict:'EA',
			templateUrl:'components/footer/footer.html'
		}
	}
})();