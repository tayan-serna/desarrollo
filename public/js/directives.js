(function () {
	angular.module('desarrollo.directives',[])
		.directive('conveniosLogos', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/convenios-logos.html'
			};
		})
		.directive('queesInfo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/quees-info.html'
			};
		})
		.directive('apoyoEstudiantil', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/apoyo-estudiantil.html'
			};
		})
		.directive('fechasEspeciales', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/fechas-especiales.html'
			};
		})
		.directive('bienestarEstudiantil', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-estudiantil.html'
			};
		})
		.directive('bienestarDeporteInfo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-deporte-info.html'
			};
		})
		.directive('bienestarDeporteBanner', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-deporte-banner.html'
			};
		})
		.directive('bienestarSaludInfo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-salud-info.html'
			};
		})
		.directive('bienestarSaludBanner', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-salud-banner.html'
			};
		})
		.directive('bienestarCulturaInfo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-cultura-info.html'
			};
		})
		.directive('bienestarCulturaBanner', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/bienestar-cultura-banner.html'
			};
		})
		.directive('trabajoEntorno', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/trabajo-entorno.html'
			};
		})
		.directive('noticiasDesarrollo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/noticias-desarrollo.html'
			};
		})
		.directive('contactoDesarrollo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/contacto-desarrollo.html'
			};
		})
		.directive('bannerAngular', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/banner-angular.html'
			};
		})
		.directive('botonModal', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/boton-modal.html'
			};
		})
		.directive('noticias', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/noticias.html'
			};
		});
})();