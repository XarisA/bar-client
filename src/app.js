(function(){
	angular.module('BarClient', [
		'ngRoute',
		'ui.bootstrap'
	])
	.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider) {

	    $routeProvider.
	      when('/', {
	        templateUrl: 'src/views/default.html',
	        controller: 'DefaultController'
	      }).
	      when('/users', {
	        templateUrl: '/src/views/users.html',
	        // controller: 'UsersController'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	      $locationProvider.html5Mode(true);
	
	}

})();