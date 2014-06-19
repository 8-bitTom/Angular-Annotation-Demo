'use strict';

angular.module('aadApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
		$scope.close = function () {
			$modalInstance.dismiss('cancel');
		};
  });
