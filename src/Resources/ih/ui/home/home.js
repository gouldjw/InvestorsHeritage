(function(){
	
	ih.ui.home = {};
	
	ih.ui.home.window = function() {
		
		var homeWindow
		// loggedOutView, loggedInView;

		var open = function() {
			if (!ih.config.tests_enabled) {
				Ti.API.info('Home window opened, starting application...');

				homeWindow = Titanium.UI.createWindow({
				    backgroundImage: 'images/bg.png',
					orientationModes: [Ti.UI.PORTRAIT],
					height: 460,
					width: 320
				});
				
				var final_expense_btn = Ti.UI.createButton({ 
					text: "wat"
					});

				//createHeader();
				//createLoggedInView();
				//createloggedOutView();
				homeWindow.add(final_expense_btn);
				homeWindow.open();

				Ti.API.debug('About to refresh home window');
			//	refresh();
				
 			}
		};
		
		//very likely to blow up here
		return {
			open: open 
		};
		
	}(); //probably doesnt belong here
	
	})();
