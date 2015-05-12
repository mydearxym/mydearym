angular
  .module('example')
  .controller('UITestController', function($scope, supersonic) {
  	var self = $scope;

  	self.submit = function(){
      supersonic.logger.warn("get submit: ")

  		var view = new supersonic.ui.View("example#learn-more");
  		supersonic.ui.layers.push(view);
  	}
  });
