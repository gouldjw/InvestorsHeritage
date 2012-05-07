(function(){
	
	ih.ui.home = {};
	
	ih.ui.home.window = function() {
		
		var homeWindow
		// loggedOutView, loggedInView;

		var open = function() {
			if (!ih.config.tests_enabled) {
				Ti.API.info('Home window opened, starting application...');
			
				var tabGroup = Titanium.UI.createTabGroup();
				Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
				
				homeWindow = Titanium.UI.createWindow({
					title: 'Premium Calc',
					barColor: 'black',
					navBarHidden:false,
          tabBarHidden: true,
				  backgroundImage: 'images/bg.png',
					orientationModes: [Ti.UI.PORTRAIT],
					height: 460,
					width: 320
				});
				
				var company_logo = Ti.UI.createView({
					backgroundImage: 'images/company_logo.png',
					top:30,
					width:'640px',
					height:'142px'
				});
				var app_name = Ti.UI.createView({
					backgroundImage: 'images/app_name.png',
					top:130,
					width:'440px',
					height:'165px'
				});
				
				var final_expense_btn = Ti.UI.createButton({ 
					title: "Final Expense II Premium Calculator",
					width:280,
					height:55,
					bottom:130
					});
					
				var legacy_gold_btn = Ti.UI.createButton({ 
					title: "Legacy Gold Preneed Rate Calculator",
					width:280,
					height:55,
					bottom:53
					});

				//createHeader();
				//createLoggedInView();
				//createloggedOutView();
				//FIXME: need to be able to pass through other window titles.
						var tab = Titanium.UI.createTab({
			            icon:'',
			            title: homeWindow.title ,
			            window:homeWindow
			        });
				 tabGroup.addTab(tab);
				
				homeWindow.add(app_name);
				homeWindow.add(company_logo);
			
				homeWindow.add(final_expense_btn);
				homeWindow.add(legacy_gold_btn);
				
		

				Ti.API.debug('About to refresh home window');
			//	refresh();
			tabGroup.open();
			
				
 			}
		};
		
		//very likely to blow up here
		return {
			open: open 
		};
		
	}(); //probably doesnt belong here
	
	})();
