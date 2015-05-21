
angular
.module('example')
.controller("FamilyController", function($scope, supersonic, $timeout){
	var self = $scope;

	var uiBodyPanelDur = 200;
	var uiBodyPanelHeight = "310px";
	var uiBodyPanelId = "#body_config_panel";


	self.hideModal = function() {
		console.log("hideModal");
		$timeout(function(){
			var options = {
				animate: true
			}
			supersonic.ui.modal.hide(options);
		})
	}

	self.uiBodyPanelShow = false;
	self.toggleBodyPanel = function() {

		if(self.uiBodyPanelShow) {
			$(uiBodyPanelId).velocity({height:"0"}, uiBodyPanelDur);
			self.uiBodyPanelShow = !self.uiBodyPanelShow;
			$timeout(function(){
				supersonic.ui.tabs.show();
			},500)
		} else {
			$(uiBodyPanelId).velocity({height: uiBodyPanelHeight}, uiBodyPanelDur);
			self.uiBodyPanelShow = !self.uiBodyPanelShow;
			supersonic.ui.tabs.hide();
		}

	}

})

