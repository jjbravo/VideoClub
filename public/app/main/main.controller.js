(function(){
'use strict';
class MainComponent{
	constructor(){
		this.bienvenidos = "Bienvenidos";
	}


}

angular.module('StartUp')
.component('main',{
	templateUrl:'app/main/main.html',
	controller:MainComponent,
	controllerAs:'vm'
})
})();