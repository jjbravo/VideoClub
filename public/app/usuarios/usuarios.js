(function(){
	'use strict';

	angular.module('StartUp')
	.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('usuarios-list',{
			url:'/usuarios-list',
			template:'<usuarios-list></usuarios-list>'
		})
		.state('usuarios-view',{
			url:'/usuarios-view/:idUsuario',
			template:'<usuarios-view></usuarios-view>'
		})
		.state('usuarios-create',{
			url:'/usuarios-create',
			template:'<usuarios-create></usuarios-create>'
		})
	}


})();