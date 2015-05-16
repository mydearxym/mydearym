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

  	self.uiBillShow = false
  	self.uiOptionPanelShow = false
  	self.checkOut = function(){
  		if(self.uiBillShow) {
  			$("#bill").velocity({height:"0px"}, 200);
  			self.uiBillShow = !self.uiBillShow;
  		} else {
  			$("#bill").velocity({height:"200px"}, 200);
  			self.uiBillShow = !self.uiBillShow;
  		}
  	}

  	self.optionPanel = function() {
      supersonic.logger.warn("dashboard:optionPanel: " + self.uiOptionPanelShow); // only + works

  		if(self.uiOptionPanelShow) {
  			$("#option_panel").velocity({height:"0"}, 200);
  			self.uiOptionPanelShow = !self.uiOptionPanelShow;
  		} else {
  			$("#option_panel").velocity({height:"26%"}, 200);
  			self.uiOptionPanelShow = !self.uiOptionPanelShow;
  		}
  	}

  	self.recipeQuery = function() {
  		var modalView = new supersonic.ui.View("example#recipe-page");
  		var options = {
  			animate: true
  		}

  		supersonic.ui.modal.show(modalView, options);
  	}
  	
  	self.uiDashWeightShow = false;
  	
  	self.switchBottomPanel = function() {
  		var option_panel_height = $("#option_panel").css("height")
  		var buy_panel_height = $("#buy_panel").css("height")

  		// var options = {
  		// 	message: "option_panel_height: " + option_panel_height,
  		// 	buttonLabel: "Close"
  		// };

  		// supersonic.ui.dialog.alert("Custom title!", options).then(function() {
  		// 	supersonic.logger.log("Alert closed.");
  		// });

  		if(parseInt(option_panel_height) > 0) {
  			$("#option_panel").velocity({height:"0"}, 200);
  			$("#buy_panel").velocity({height:"26%"}, 300);
  		} else {
  			$("#option_panel").velocity({height:"26%"}, 200);
  			$("#buy_panel").velocity({height: "0"}, 300);
  		}

  	}

  	self.calculateQuery = function() {
  		// self.uiDashWeightShow = !self.uiDashWeightShow
  		
  		// $("#calcular-icon").velocity("transition.swoopOut");
  		
  		// $timeout(function(){
  		// 	$("#calcular-icon").velocity("transition.swoopIn");
  		// },2000)

  		// $("#calcular-icon").velocity("transition.whirlOut");
  		
  		// $timeout(function(){
  		// 	$("#calcular-icon").velocity("transition.whirlIn");
  		// },2000)

	
	    $("#option_panel").velocity({height:"0"}, 200);
	    self.uiOptionPanelShow = !self.uiOptionPanelShow;

	    $("#buy_panel").velocity({height:"26%"}, 200);
	    // self.uiOptionPanelShow = !self.uiOptionPanelShow;


  		// $("#calcular-icon").velocity("transition.expandOut", {duration: 300});
  		// $("#dash-weight").velocity({height: "30%"},200)
  			// $("#dash-weight").velocity("transition.slideUpBigIn",  {duration: 300});
  		
  		// $timeout(function(){
  			// $("#calcular-icon").velocity("transition.slideUpBigIn",  {duration: 300});
  			// $("#dash-weight").velocity("transition.slideUpBigIn",  {duration: 300});
  		// })



  		// supersonic.logger.warn("calculateComfirm");
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
	var animationName2 = "animated bounceLn";
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

	$("#recipeQuery").on("click", function(){
		var that = $(this);
		that.addClass(animationName2).one(animationEnd, function(){
			that.removeClass(animationName2)
		})
	})


})





