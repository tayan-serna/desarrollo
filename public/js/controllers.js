(function () {
	angular.module('desarrollo.controllers',[])
		// .controller('ConveniosController', [ '$scope', '$http', function ( $scope , $http ) {
		// 		$scope.convenios = [];

		// 		$http.get('/convenios.json')
		// 			.success( function (data) {
		// 				$scope.convenios = data;
		// 			});

		.controller('ConveniosController',['$scope', 'convenioService', function ( $scope, convenioService) {
				
				// convenioService.all().then(function (data) {
				// 	$scope.convenio = data;
				// });

				$scope.convenio = {
					nombre: 'convenio1',
					contenido: 'Lorém ipsum dolor sit amet, Saepe assumenda perferendis beatae inventore libero, deleniti, nihil nostrum distinctio repellendus harum? Esse atque consectetur nisi porro molestiae ut totam inventore iure?'
				};
			}])
		.controller('EnviaController', [ '$scope', function ($scope) {
			$scope.envia = {};

			$scope.alertavalido = function (){
				alert('Esta validado :)');
			};
		}])
		.controller('CarouselHomeCtrl', function ($scope) {
			$scope.myInterval = 5000;
			var slides = $scope.slides = [];

			$scope.addSlide = function() {
				slides.push({
						image: 'img/'+2+'.jpg', //el espacio entre "+" es donde irá el Url de la imagen como servicio
						text: ['prueba','prueba','prueba'][slides.length % 3] + ' ' +
						['Angular','Angular','Angular'][slides.length % 3]
						// "slides.length % 3" para saber en que ubicación va cada slide
					});
				};
				// en la iteración se coloca el número de slices que se quieren
			for (var i=0; i<3; i++) {
				$scope.addSlide();
				}
			})
		.controller('CarouselDeporCtrl', function ($scope) {
			$scope.myInterval = 5000;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
				var newWidth = 600 + slides.length + 1;
				slides.push({
					image: 'img/deporte/1.jpg',
					text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
					['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
					});
				};
				for (var i=0; i<4; i++) {
					$scope.addSlide();
				}
			})
		.controller('CarouselSaludCtrl', function ($scope) {
			$scope.myInterval = 5000;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
				var newWidth = 600 + slides.length + 1;
				slides.push({
					image: 'img/deporte/1.jpg',
					text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
					['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
					});
				};
				for (var i=0; i<4; i++) {
					$scope.addSlide();
				}
			})
		.controller('CarouselCulturaCtrl', function ($scope) {
			$scope.myInterval = 5000;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
				var newWidth = 600 + slides.length + 1;
				slides.push({
					image: 'img/cultura/1.jpg',
					text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
					['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
					});
				};
				for (var i=0; i<4; i++) {
					$scope.addSlide();
				}
			})
		.controller('CarouselFechasCtrl', function ($scope) {
			$scope.myInterval = 5000;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
				var newWidth = 600 + slides.length + 1;
				slides.push({
					image: 'img/fechas-especiales/1.jpg',
					text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
					['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
					});
				};
				for (var i=0; i<4; i++) {
					$scope.addSlide();
				}
			})
		.controller('CarouselVecinosCtrl', function ($scope) {
			$scope.myInterval = 5000;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
				var newWidth = 600 + slides.length + 1;
				slides.push({
					image: 'img/trabajo-entorno/1.jpg',
					text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
					['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
					});
				};
				for (var i=0; i<4; i++) {
					$scope.addSlide();
				}
			})
		.controller('PopoverDemoCtrl', function ($scope) {
			  $scope.dynamicPopover = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus commodi eligendi nobis molestias reiciendis culpa esse ex sit accusantium, et debitis ullam quasi? Quas laboriosam, itaque sed, consectetur vel rem.';
			  $scope.dynamicPopoverTitle = 'CONVENIO 1';
			})
		.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

		 
		$scope.items = ['item1', 'item2', 'item3'];

		  $scope.open = function (size) {

		    var modalInstance = $modal.open({
	  			templateUrl: 'myModalContent.html',
		      	controller: 'ModalInstanceCtrl',
		      	size: size,
		      	resolve: {
			        items: function () {
		          		return $scope.items;
		        		}
		      		}
			    });

	    		modalInstance.result.then(function (selectedItem) {
	      			$scope.selected = selectedItem;
	    			}, function () {
	      			$log.info('Modal dismissed at: ' + new Date());
		    		});
		  		};
			})
		.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

			$scope.items = items;
			$scope.selected = {
				item: $scope.items[0]
				};

			$scope.ok = function () {
				$modalInstance.close($scope.selected.item);
				};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
				};
			});
})();