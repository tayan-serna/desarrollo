( function () {
	angular.module('convenios.services', [])
		.factory('convenioService', ['$http', '$q', function($http , $q){
			
			function all(){
				var deferred = $q.defer();

				$http.get('/convenios.json')
					.success(function (data){
						deferred.resolve(data);
					});

					return deferred.promise;
			}

			return {
				all	: all	
			}
		}]);

})();