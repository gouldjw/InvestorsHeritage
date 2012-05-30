var data = [];

 tableview = Titanium.UI.createTableView({
                  top:0, left:0, bottom:0, right:0,
									
              style: Titanium.UI.iPhone.TableViewStyle.GROUPED});

			var row = Ti.UI.createTableViewRow();
	
			 var label = Titanium.UI.createLabel({
	        text: 'Final Expense II Plan Description:\n Issue Ages: 0-80\n\r Payment Options: \n 5 Years\n 10 Years\n 20 Years\n To Age 100 (Whole Life) \n\rFull Benefit: \n Level Death Benefit to Age 120\n Endows for Face Amount at Age 120\n Minimum Face Amount: $2,000\n Maximum Face Amount Ages 0-65: $25,000\n Maximum Face Amount Ages 66-80: $15,000\n Proposed Insured MUST be able to sign the application\n\ Reduced Benefit:\n Guaranteed Issue\n First 3 Policy Years the Death Benefit = 		\n	Return of Premium + 5% interest\n\r \n\r Minimum Face Amount: $2,000\n Maximum Face Amount: $15,000\n Application may be signed by POA or Guardian\n\r \n\r ARKANSAS: \n REDUCED BENEFIT IS NOT AVAILABLE\n MISSOURI: \n REDUCED BENEFIT ISSUE AGES 0-60\n',
	        backgroundImage:'../../images/calculate.png',
	    });
			Ti.UI.currentWindow.add(tableview);
	
	    row.add(label);
			data.push(row);
			 tableview.setData(data);
	


// this will take one of three arguments for its out put
