(function(){
	angular.module('BarClient', [
		'ngRoute',
		'ui.bootstrap'
	])
	.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider) {

	    $routeProvider.
	      when('/dashboard', {
	        templateUrl: 'src/views/default.html',
	        // controller: 'DefaultController'
	      }).
	      when('/dashboard/profile', {
	      	templateUrl: 'src/views/profile.html',
	      	// controller: 'ProfileController'
	      }).
	      when('/dashboard/about', {
	      	templateUrl: 'src/views/about.html',
	      	// controller: 'AboutController'
	      }).
	      otherwise({
	        redirectTo: '/dashboard'
	      });
	      $locationProvider.html5Mode(true);
	
	}

})();