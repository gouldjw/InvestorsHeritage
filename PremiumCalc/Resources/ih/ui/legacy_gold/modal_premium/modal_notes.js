var data = [];

 tableview = Titanium.UI.createTableView({
                  top:0, left:0, bottom:0, right:0,
									selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
					       backgroundImage: '/images/penstripe.png',
								borderColor: 'transparent',
						
								//	style: 'Titanium.UI.iPhone.TableViewStyle.GROUPED'none
									});
			var row = Ti.UI.createTableViewRow({
				width:340,
				height:'1300px',
				backgroundColor:'transparent',
				borderColor: 'transparent'
			});
	
		var notes =	Ti.UI.createImageView({
				image:'/images/gold_calc_notes.png',
				borderColor: 'transparent',
				width:340,
				height:'1300px',
			
			});
			Ti.UI.currentWindow.add(tableview);
	
	    row.add(notes);
			data.push(row);
			 tableview.setData(data);
	


// this will take one of three arguments for its out put
