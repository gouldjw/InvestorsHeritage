var data = [];

var db = Titanium.Database.install('../../../ih.sqlite','ihcalc');

var rows = db.execute('SELECT * FROM ihcalc where issue_age="'+Ti.App.Properties.getString('feii_issue_age')+'"  AND  sex="'+Ti.App.Properties.getString('feii_sex')+'" limit 1;'); 

var feii_modal_prem = Ti.UI.createImageView({
	image:'/images/feii_modal_premiums.png',
	width:260,
	top:-15
});

Ti.UI.currentWindow.add(feii_modal_prem);

 tableview =	Titanium.UI.createTableView({
                 top:100, left:0, bottom:0, right:0,
									backgroundColor:'transparent',
							   style: Titanium.UI.iPhone.TableViewStyle.GROUPED});

			var row = Ti.UI.createTableViewRow({backgroundColor:'white',  height:200,selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE});
	
		    var label = Titanium.UI.createLabel({
	         text: "name passed: "+ Ti.App.Properties.getString('feii_name') + '\n\r'+ "this is a demo to show that values can be passed and queried. the correct screen will be updated in the next iteration",
	 				
	     });
				var label2 = Titanium.UI.createLabel({
	         text: "THIS IS NOT A CLIENT FACING DEMO. FOR DISCUSSION PURPOSES ONLY AND TO SHOW THAT THIS WILL BE DELIVERED TODAY." 
	     });
			Ti.UI.currentWindow.add(tableview);
	
	    row.add(label);
			data.push(row);
			// tableview.setData(data);
			var row2 = Ti.UI.createTableViewRow({backgroundColor:'white',  selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE});
			
			row2.add(label2);
			data.push(row2);
			
			//db.execute("COMMIT");
			while (rows.isValidRow())
			{
				var label3 =Ti.UI.createLabel({text:rows.field(1) + '\n' + rows.field(0) + ' col 1 ' + rows.fieldName(0) + ' col 2 ' + rows.fieldName(1)});
				var row3 = Ti.UI.createTableViewRow({backgroundColor:'white',  selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE});

				row3.add(label3);
				data.push(row3);
				rows.next();
			}

			// close database
			rows.close();
			
			 tableview.setData(data);
	


