'use strict'

angular
  // .module('example', ['angular-velocity'])
  .module('example')
  
  .controller('DashboardController', function($scope, supersonic, $timeout, $http) {
  	var self = $scope;
  	// self.navbarTitle = "UI 测试哈"

    supersonic.ui.tabs.hide();

    self.gotoShopPage = function(page) {
      supersonic.ui.tabs.hide();
      if("var" == page) {
        self.curItems = self.curItemsVar
      } else if("fruit" == page){
        self.curItems = self.curItemsFruit
      } else if("meat" == page){
        self.curItems = self.curItemsMeat
      } else { //wine
        self.curItems = self.curItemsWine
      }
      $(".shop_items").velocity("transition.slideUpIn", {duration: 350, stagger:300})
    }

  	self.curItemsVar = [
  	  {
  	  	name: "蔬菜",
  	  	imgsrc: "/components/pagesStyle/img/fruits/ningmeng.png"
  	  },

  	  {
  	  	name: "鳄梨",
  	  	imgsrc: "/components/pagesStyle/img/fruits/eli.png"
  	  },

  	  {
  	  	name: "火龙果",
  	  	imgsrc: "/components/pagesStyle/img/fruits/huolongguo.png"
  	  },

  	  {
  	  	name: "桔子",
  	  	imgsrc: "/components/pagesStyle/img/fruits/juzi.png"
  	  },

  	  {
  	  	name: "榴莲",
  	  	imgsrc: "/components/pagesStyle/img/fruits/liulian.png"
  	  },

      {
        name: "李子",
        imgsrc: "/components/pagesStyle/img/fruits/lizi.png"
      },
  	
      {
        name: "香梨",
        imgsrc: "/components/pagesStyle/img/fruits/lizireal.png"
      },

      {
        name: "猕猴桃",
        imgsrc: "/components/pagesStyle/img/fruits/mihoutao.png"
      },
      {
        name: "木瓜",
        imgsrc: "/components/pagesStyle/img/fruits/mugua.png"
      },
      
      {
        name: "苹果",
        imgsrc: "/components/pagesStyle/img/fruits/pinguo.png"
      },

      {
        name: "葡萄",
        imgsrc: "/components/pagesStyle/img/fruits/putao.png"
      },

      {
        name: "山竹果",
        imgsrc: "/components/pagesStyle/img/fruits/shanzhuguo.png"
      },

      {
        name: "桃子",
        imgsrc: "/components/pagesStyle/img/fruits/taozi.png"
      },

      {
        name: "香蕉",
        imgsrc: "/components/pagesStyle/img/fruits/xiangjiao.png"
      },

      {
        name: "西瓜",
        imgsrc: "/components/pagesStyle/img/fruits/xigua.png"
      },

      {
        name: "椰子",
        imgsrc: "/components/pagesStyle/img/fruits/yezi.png"
      }
    ]
    self.curItemsFruit = [
      {
        name: "柠檬",
        imgsrc: "/components/pagesStyle/img/fruits/ningmeng.png"
      },

      {
        name: "鳄梨",
        imgsrc: "/components/pagesStyle/img/fruits/eli.png"
      },

      {
        name: "火龙果",
        imgsrc: "/components/pagesStyle/img/fruits/huolongguo.png"
      },

      {
        name: "桔子",
        imgsrc: "/components/pagesStyle/img/fruits/juzi.png"
      },

      {
        name: "榴莲",
        imgsrc: "/components/pagesStyle/img/fruits/liulian.png"
      },

      {
        name: "李子",
        imgsrc: "/components/pagesStyle/img/fruits/lizi.png"
      },
    
      {
        name: "香梨",
        imgsrc: "/components/pagesStyle/img/fruits/lizireal.png"
      },

      {
        name: "猕猴桃",
        imgsrc: "/components/pagesStyle/img/fruits/mihoutao.png"
      },
      {
        name: "木瓜",
        imgsrc: "/components/pagesStyle/img/fruits/mugua.png"
      },
      
      {
        name: "苹果",
        imgsrc: "/components/pagesStyle/img/fruits/pinguo.png"
      },

      {
        name: "葡萄",
        imgsrc: "/components/pagesStyle/img/fruits/putao.png"
      },

      {
        name: "山竹果",
        imgsrc: "/components/pagesStyle/img/fruits/shanzhuguo.png"
      },

      {
        name: "桃子",
        imgsrc: "/components/pagesStyle/img/fruits/taozi.png"
      },

      {
        name: "香蕉",
        imgsrc: "/components/pagesStyle/img/fruits/xiangjiao.png"
      },

      {
        name: "西瓜",
        imgsrc: "/components/pagesStyle/img/fruits/xigua.png"
      },

      {
        name: "椰子",
        imgsrc: "/components/pagesStyle/img/fruits/yezi.png"
      }
    ]

    self.curItemsMeat = [
      {
        name: "肉类",
        imgsrc: "/components/pagesStyle/img/fruits/ningmeng.png"
      },

      {
        name: "鳄梨",
        imgsrc: "/components/pagesStyle/img/fruits/eli.png"
      },

      {
        name: "火龙果",
        imgsrc: "/components/pagesStyle/img/fruits/huolongguo.png"
      },

      {
        name: "桔子",
        imgsrc: "/components/pagesStyle/img/fruits/juzi.png"
      },

      {
        name: "榴莲",
        imgsrc: "/components/pagesStyle/img/fruits/liulian.png"
      },

      {
        name: "李子",
        imgsrc: "/components/pagesStyle/img/fruits/lizi.png"
      },
    
      {
        name: "香梨",
        imgsrc: "/components/pagesStyle/img/fruits/lizireal.png"
      },

      {
        name: "猕猴桃",
        imgsrc: "/components/pagesStyle/img/fruits/mihoutao.png"
      },
      {
        name: "木瓜",
        imgsrc: "/components/pagesStyle/img/fruits/mugua.png"
      },
      
      {
        name: "苹果",
        imgsrc: "/components/pagesStyle/img/fruits/pinguo.png"
      },

      {
        name: "葡萄",
        imgsrc: "/components/pagesStyle/img/fruits/putao.png"
      },

      {
        name: "山竹果",
        imgsrc: "/components/pagesStyle/img/fruits/shanzhuguo.png"
      },

      {
        name: "桃子",
        imgsrc: "/components/pagesStyle/img/fruits/taozi.png"
      },

      {
        name: "香蕉",
        imgsrc: "/components/pagesStyle/img/fruits/xiangjiao.png"
      },

      {
        name: "西瓜",
        imgsrc: "/components/pagesStyle/img/fruits/xigua.png"
      },

      {
        name: "椰子",
        imgsrc: "/components/pagesStyle/img/fruits/yezi.png"
      }
    ]

    self.curItemsWine = [
      {
        name: "酒类",
        imgsrc: "/components/pagesStyle/img/fruits/ningmeng.png"
      },

      {
        name: "鳄梨",
        imgsrc: "/components/pagesStyle/img/fruits/eli.png"
      },

      {
        name: "火龙果",
        imgsrc: "/components/pagesStyle/img/fruits/huolongguo.png"
      },

      {
        name: "桔子",
        imgsrc: "/components/pagesStyle/img/fruits/juzi.png"
      },

      {
        name: "榴莲",
        imgsrc: "/components/pagesStyle/img/fruits/liulian.png"
      },

      {
        name: "李子",
        imgsrc: "/components/pagesStyle/img/fruits/lizi.png"
      },
    
      {
        name: "香梨",
        imgsrc: "/components/pagesStyle/img/fruits/lizireal.png"
      },

      {
        name: "猕猴桃",
        imgsrc: "/components/pagesStyle/img/fruits/mihoutao.png"
      },
      {
        name: "木瓜",
        imgsrc: "/components/pagesStyle/img/fruits/mugua.png"
      },
      
      {
        name: "苹果",
        imgsrc: "/components/pagesStyle/img/fruits/pinguo.png"
      },

      {
        name: "葡萄",
        imgsrc: "/components/pagesStyle/img/fruits/putao.png"
      },

      {
        name: "山竹果",
        imgsrc: "/components/pagesStyle/img/fruits/shanzhuguo.png"
      },

      {
        name: "桃子",
        imgsrc: "/components/pagesStyle/img/fruits/taozi.png"
      },

      {
        name: "香蕉",
        imgsrc: "/components/pagesStyle/img/fruits/xiangjiao.png"
      },

      {
        name: "西瓜",
        imgsrc: "/components/pagesStyle/img/fruits/xigua.png"
      },

      {
        name: "椰子",
        imgsrc: "/components/pagesStyle/img/fruits/yezi.png"
      }
    ]

    self.toggleDashPanel = function(){
      if(self.uiOptionPanelShow) {
        $("#option_panel").velocity({height:"0"}, 200);
        self.uiOptionPanelShow = !self.uiOptionPanelShow;
      } else {
        $("#option_panel").velocity({height:"26%"}, 200);
        self.uiOptionPanelShow = !self.uiOptionPanelShow;
      }

      // var options = {
      //  message: "iamge clicked",
      //  buttonLabel: "Close"
      // };

      // supersonic.ui.dialog.alert("Custom title!", options).then(function() {
      //  supersonic.logger.log("Alert closed.");
      // });
    }

    self.curItems = self.curItemsVar

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

  			 $(".YM_Bill").velocity("transition.slideRightIn", { stagger: 100, duration: 250 })

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

  	self.checkShopItem = function() {
  		// var options = {
  		// 	message: "checkShopItem",
  		// 	buttonLabel: "Close"
  		// };

  		// supersonic.ui.dialog.alert("Custom title!", options).then(function() {
  		// 	supersonic.logger.log("Alert closed.");
  		// });

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
  		supersonic.ui.tabs.select(1);
      supersonic.ui.tabs.show();
    
    //   var modalView = new supersonic.ui.View("example#family-config");
  		// var options = {
  		// 	animate: true
  		// }
  		// supersonic.ui.modal.show(modalView, options);
  	

    }
  

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


	$(document).on("click", ".shop_item", function(){
		$(this).velocity("callout.pulse", {duration: 300});

	})

	// $(".shop_item").on("click",'a', function(){
		// $(this).velocity("callout.pulse", {duration: 300});
	// })

	// $(".shop_item").on("click", function(){
	// 	var that = $(this);
	// 	that.addClass(animationName).one(animationEnd, function(){
	// 		that.removeClass(animationName);
	// 	})
	// })

})





