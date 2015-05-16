
angular
.module('example')
.controller("RecipeController", function($scope, supersonic, $timeout){
	var self = $scope;

	self.hideModal = function() {
		console.log("hideModal");
		$timeout(function(){
			var options = {
				animate: true
			}
			supersonic.ui.modal.hide(options);
		})
	}
})



