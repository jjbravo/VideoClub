(function(){
	'use strict';
	angular.module('StartUp')
	.factory('usuariosService',usuariosService);
	usuariosService.$inject = ["$resource","API"];

	function usuariosService($resource,API){
		return $resource(API+"/api/usuarios/:id",{
			id:'@id'
		})
	}

})();