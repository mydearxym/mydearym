angular
  .module('example')
  .controller('DashboardController', function($scope, supersonic, $timeout) {
  	var self = $scope;
  	self.navbarTitle = "UI 测试哈"

  	var iceBoxOpts = {
  		side: "left",
  		width: 250
  	}

  	supersonic.ui.drawers.init("example#ice-box", iceBoxOpts);

  	// self.submit = function(){
   //    supersonic.logger.warn("get submit: ")
  	// 	var view = new supersonic.ui.View("example#wave-test");
  	// 	supersonic.ui.layers.push(view);
  	// }

  	self.uiBillShow = false
  	
  	self.checkOut = function(){
  		if(self.uiBillShow) {
  			$("#bill").animate({height:"0px"}, 300);
  			self.uiBillShow = !self.uiBillShow;
  			// $("#bill").animate({height:'0px'},100, function(){
  			// 	self.uiBillShow = !self.uiBillShow
  			// }
  		} else {
  			$("#bill").animate({height:"200px"}, 300);
  			self.uiBillShow = !self.uiBillShow;
  			// $("#bill").animate({height:'200px'},100, function(){
  			// 	self.uiBillShow = !self.uiBillShow
  			// })
  		}

  	}

  	self.openIceBox = function(){
  		supersonic.ui.drawers.open("left").then( function() {
  			supersonic.logger.debug("Drawer was shown");
  		});

  	}

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

//init the animation staff
$(function(){
	var animationName = "animated rubberBand";
	var animationName2 = "animated jello";
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
			that.removeClass(animationName2)
		})
	})

})





