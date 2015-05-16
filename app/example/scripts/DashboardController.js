angular
  .module('example')
  .controller('DashboardController', function($scope, supersonic, $timeout) {
  	var self = $scope;

  	self.navbarTitle = "UI 测试哈"

  	// self.submit = function(){
   //    supersonic.logger.warn("get submit: ")
  	// 	var view = new supersonic.ui.View("example#wave-test");
  	// 	supersonic.ui.layers.push(view);
  	// }
  
  	self.goToRecomment = function(){
  		$timeout(function(){
  			var view = new supersonic.ui.View("example#recommend-page");
  			supersonic.ui.layers.push(view);
  		})
  	}
  	self.goToFamily = function(){
  		var modalView = new supersonic.ui.View("example#family-config");
  		var options = {
  			animate: true
  		}
  		supersonic.ui.modal.show(modalView, options);
  	}


  	jQuery("#mailMan").on("dashboard:swiper:goto", function(e, data){
      supersonic.logger.warn("dashboard:swiper:goto: " + data); // only + works
      console.log("@dashboard:swiper:goto: ", data)
  	})
  })

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

	$("#dashboard-family").on("touchstart", function(){
		var that = $(this);
		that.addClass(animationName).one(animationEnd, function(){
			that.removeClass(animationName)
		})
	})

})





