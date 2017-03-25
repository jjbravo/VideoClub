(function(){
	'use strict';
	class UsuariosCreateComponent{
		constructor(usuariosService,$state){
			this.usuariosService = usuariosService;
			this.$state = $state;
		}

		createUser(){
			//console.log(this.usuario);

			this.usuario.idTipoDocumento = {
				id:1
			};

			this.usuariosService.save(this.usuario).$promise
			.then(response => {
				console.log("Guardado ", response);
				this.$state.go('usuarios-list');
			})
			.catch(err => console.log(err));

		}

	}

	UsuariosCreateComponent.$inject = ['usuariosService','$state'];
	angular.module('StartUp')
	.component('usuariosCreate',{
		templateUrl:'app/usuarios/usuarios-create/usuarios-create.html',
		controller:UsuariosCreateComponent,
		controllerAs:'vm'
	})
})();