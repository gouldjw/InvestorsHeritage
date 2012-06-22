var data = [];

 tableview = Titanium.UI.createTableView({
                  top:0, left:0, bottom:0, right:0,
									selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
					       backgroundImage: '/images/penstripe.png',
								borderColor: 'transparent',
						
								//	style: 'Titanium.UI.iPhone.TableViewStyle.GROUPED'none
									});

			var row = Ti.UI.createTableViewRow({
				width:320,
				height:541,
				backgroundColor:'transparent',
				borderColor: 'transparent'
			});
	
		var notes =	Ti.UI.createImageView({
				image:'/images/feii_notes.png',
				borderColor: 'transparent',
				width:320,
				height:541,
			top:0
			});
			Ti.UI.currentWindow.add(tableview);
	
	    row.add(notes);
			data.push(row);
			 tableview.setData(data);
	
Ti.UI.currentWindow.backButtonTitle = 'Back';

// this will take one of three arguments for its out put
