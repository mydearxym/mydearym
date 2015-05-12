angular
  .module('example')
  .controller('UITestController', function($scope, supersonic) {
  	var self = $scope;

  	self.navbarTitle = "UI 测试哈"

  	self.submit = function(){
      supersonic.logger.warn("get submit: ")

  		var view = new supersonic.ui.View("example#wave-test");
  		supersonic.ui.layers.push(view);
  	}
  

  });
