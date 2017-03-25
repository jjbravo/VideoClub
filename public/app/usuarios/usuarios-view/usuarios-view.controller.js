(function(){
	'use strict';
	class UsuariosViewComponent{
		constructor(usuariosService,$stateParams){
			this.$stateParams = $stateParams;
			this.usuariosService =  usuariosService;
		}

		$onInit(){
			this.usuariosService.get({
				id:this.$stateParams.idUsuario
				
			}).$promise
			.then(response => {
				this.usuario = response;
				console.log(this.usuario);
			});


		}
	}


	angular.module('StartUp')
	.component('usuariosView',{
		templateUrl:'app/usuarios/usuarios-view/usuarios-view.html',
		controller:UsuariosViewComponent,
		controllerAs:'vm'
	})
})();