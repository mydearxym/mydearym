'use strict'

angular
  .module('example')
  
  .controller('AnalysisController', function($scope, supersonic, $timeout, $http) {
  	var self = $scope;
  	// self.navbarTitle = "UI 测试哈"

    self.backToHome = function(){
        
      supersonic.ui.tabs.select(0);
      supersonic.ui.tabs.hide();
    }

})





