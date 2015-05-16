
angular
.module('example')
.controller("FamilyController", function($scope, supersonic, $timeout){
	var self = $scope;

	self.hideModal = function() {
		console.log("hideModal");
		var options = {
			animate: true
		}
		supersonic.ui.modal.hide(options);
	}
})

