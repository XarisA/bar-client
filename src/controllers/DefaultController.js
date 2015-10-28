(function(){
	'use strict';

	angular.module('BarClient').controller('DefaultController', DefaultController);

	DefaultController.$inject = ['$scope','$uibModal'];
	function DefaultController ($scope,$uibModal){

		$scope.open = function(){
				var modalInstance = $uibModal.open({
					size: 'sm'
				});
		}
	}
})();