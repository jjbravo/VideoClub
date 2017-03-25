(function(){
	'use strict';

	class UsuariosListComponent{
		constructor(usuariosService){
			this.usuariosService = usuariosService;	
		}

		$onInit(){
			this.usuariosService.query().$promise
			.then(response => {
				this.usuarios = response;
			});
		}



	}

angular.module('StartUp')
	.component('usuariosList',{
		templateUrl:"app/usuarios/usuarios-list/usuarios-list.html",
		controller:UsuariosListComponent,
		controllerAs:'vm'
	})

})();