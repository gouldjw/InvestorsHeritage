var data = [];

 tableview = Titanium.UI.createTableView({
                  top:0, left:0, bottom:0, right:0,
									
              style: Titanium.UI.iPhone.TableViewStyle.GROUPED});

			var row = Ti.UI.createTableViewRow();
	
			 var label = Titanium.UI.createLabel({
	        text: 'modal notes here',
					backgroundImage:'../../images/calculate.png',
	    });
			Ti.UI.currentWindow.add(tableview);
	
	    row.add(label);
			data.push(row);
			 tableview.setData(data);
	


// this will take one of three arguments for its out put
