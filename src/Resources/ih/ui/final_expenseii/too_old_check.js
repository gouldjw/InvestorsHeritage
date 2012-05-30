 var a = Titanium.UI.createAlertDialog({
	title:'Issue Age Not Available',
	message:'This policy is only avaliable to customers between the age of \n 0 - 80. \n\r If you entered the wrong age by accident, please tap the Cancel button and reenter the correct age. \n\r If your customer is older than 80, please tap the LGSP button to go to the correct policy.',
	buttonNames: ["Cancel", "LGSP"],

});
a.addEventListener('click',function(e) {
	if (e.index ==1){
		// TODO: comeback to this
		 var legacy_gold_choice ={title: 'LG Single'};
		 var legacy_gold_preneed_single_premium_window = Ti.UI.createWindow({
		 						backButtonTitle: 'Home',
		 						title: legacy_gold_choice.title,
		 						barColor: 'black',
		 						navBarHidden:false,
		 	          tabBarHidden: true,
		 					  //backgroundImage: '../../../images/bg.png',
		 						orientationModes: [Ti.UI.PORTRAIT],
		             url:"/ih/ui/legacy_gold/single_premium/single_premium.js"
		         });
						var infoButton = Ti.UI.createButton({
						    systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
						});

						legacy_gold_preneed_single_premium_window.setRightNavButton(infoButton);
										infoButton.addEventListener('click',function(e) {
												var infoWindow = Ti.UI.createWindow({
									  								backButtonTitle: 'back',
																		title: 'Notes',
																		barColor: 'black',
																		navBarHidden:false,
													          tabBarHidden: true,

																		orientationModes: [Ti.UI.PORTRAIT],
									                  url:"ih/ui/notes/single_notes.js"
																		 // url:"ih/ui/email/email.js",
																		 // evalhtml:true
									              });
																//var bar = Ti.UI.getCurrentTab();
																legacy_gold_preneed_single_premium_window.open(infoWindow,{animated:true});
										});
		 legacy_gold_preneed_single_premium_window.open();
	}

});

a.show();