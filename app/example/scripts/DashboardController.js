angular
  .module('example')
  .controller('DashboardController', function($scope, supersonic, $timeout) {
  	var self = $scope;

  	self.navbarTitle = "UI 测试哈"

  	self.submit = function(){
      supersonic.logger.warn("get submit: ")

  		var view = new supersonic.ui.View("example#wave-test");
  		supersonic.ui.layers.push(view);
  	}
  
  	self.goToRecomment = function(){

  		$timeout(function(){
  			var view = new supersonic.ui.View("example#recommend-page");
  			supersonic.ui.layers.push(view);
  		})
  	}


  });

//init the animation staff

$(function(){
	var animationName = "animated rubberBand";
	var animationEnd  = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	//todo: change it to touchstart
	$("#dashboard-recommend").on("touchstart", function(){
		var that = $(this);
		that.addClass(animationName).one(animationEnd, function(){
			that.removeClass(animationName)
		})
	})

})





