
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
					width:'280px',
					bottom:130,
					backgroundImage: 'images/btncap.png',
					backgroundLeftCap: 8
					});
					
					
			 //	Ti.UI.createButton({
			 //	    height : 84,
			 //	    width : 200,
			 //	    bottom : 10,
			 //	    backgroundImage : 'WKButton84.png',
			 //	    backgroundLeftCap : 10
			 //	})
			 //	
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
				


			tabGroup.open();
			
			final_expense_btn.addEventListener('click', function(e){
					var finalExpenseWindow = Ti.UI.createWindow({
		  								backButtonTitle: 'Home',
											title: 'Final Expense II',
											barColor: 'black',
											navBarHidden:false,
						          tabBarHidden: true,
										  backgroundImage: 'images/bg.png',
											orientationModes: [Ti.UI.PORTRAIT],
		                  url:"ih/ui/final_expenseii/final_expense.js"
		              });
									//bloglabel.backgroundImage = 'transparent';
									tabGroup.activeTab.open(finalExpenseWindow,{animated:true});		
						});
						
						
							legacy_gold_btn.addEventListener('click', function(e){
								var legacy_gold_dialog_options = {
									options:['Single Premium Pay', 'Modal Premium Pay', 'Cancel'],
									cancel:2,
									title:'Please choose your payment method'
								};
								var legacy_gold_dialog = Titanium.UI.createOptionDialog(legacy_gold_dialog_options);
								
								legacy_gold_dialog.show();
								
									legacy_gold_dialog.addEventListener('click',function(e)
									{
										//Ti.API.log( 'You selected ' + e.index);
										var legacy_gold_choice ={title: ''};
										var legacy_gold_preneed_window = Ti.UI.createWindow({
							  								backButtonTitle: 'Home',
																title: legacy_gold_choice.title,
																barColor: 'black',
																navBarHidden:false,
											          tabBarHidden: true,
															  backgroundImage: 'images/bg.png',
																orientationModes: [Ti.UI.PORTRAIT],
							                  url:"ih/ui/final_expenseii/final_expense.js"
							              });
														//bloglabel.backgroundImage = 'transparent';
														tabGroup.activeTab.open(legacy_gold_preneed_window,{animated:true});
									});
												
								
										});
										
						

				
 			}
		};
		
		//very likely to blow up here
		return {
			open: open 
		};
		
	}(); //probably doesnt belong here
	
	})();
