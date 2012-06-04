var data = [];

var db = Titanium.Database.install('../../../../ih.sqlite', 'legacy_single_premium_rates');


//var rows= db.execute('SELECT * FROM final_expense_rate where issue_age="26" AND plan="Full Benefit" AND  sex="Male" AND  tobacco_status="Tobacco" limit 1; ');
//var rows = db.execute('SELECT * FROM final_expense_rate where issue_age="'+Ti.App.Properties.getString('feii_issue_age')+'"  AND plan="'+Ti.App.Properties.getString('feii_plan')+'" AND  sex="'+Ti.App.Properties.getString('feii_sex')+'" AND  tobacco_status="'+Ti.App.Properties.getString('feii_tobacco_status')+'" AND pay_period="'+Ti.App.Properties.getString('feii_premium_period')+'" limit 1'); 
//	alert(Ti.App.Properties.getString('feii_premium_period'));
//	alert(real_pay[0]);

var rows = db.execute('SELECT * FROM legacy_single_premium_rates limit 1');
//	alert(rows.rate_per_1000);
	//alert(real_pay[0]);
while (rows.isValidRow()){
		 	
		 		rows.next();
			}
	rows.close();

//alert('funeral amount');

// policy face amount


//name plate

//2d matrix
//age prem/1000 total prem




var single_premium_due = Ti.UI.createImageView({
    image: '/images/single_premium_due.png',
    width: 240,
    top: 1
});


var name_plate = Ti.UI.createImageView({
    image: '/images/name_plate.png',
    top: 70,
    width: '95%'
});


Ti.UI.currentWindow.add(single_premium_due);
Ti.UI.currentWindow.add(name_plate);

var customer_name = Ti.UI.createLabel({
	top:32,
	text: Ti.App.Properties.getString('lspr_name') || 'No Name',
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 10,
  color: 'black',
});

name_plate.add(customer_name);

var volume = Ti.UI.createLabel({
	top:52,
	text: 'Funeral Amt: $'+ Ti.App.Properties.getString('lspr_funeral_amount') ,
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 10,
  color: 'black',
});

name_plate.add(volume);

function getDate(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
 
    return day+"/"+month+"/"+year;
}   

var date_label = Ti.UI.createLabel({
	top:32,
	text: getDate(),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 200,
  color: 'black',
});

name_plate.add(date_label);

var issue_age_label = Ti.UI.createLabel({
	top:52,
	text: 'Issue Age: '+ Ti.App.Properties.getString('lspr_age') ,
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 183,
  color: 'black',
});

name_plate.add(issue_age_label);


tableview = Titanium.UI.createTableView({
    top: 135,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var row = Ti.UI.createTableViewRow({
    backgroundColor: 'white',
    height: 30,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var annual = Titanium.UI.createLabel({
    text: "Annual",
		textAlign: 'left',
	  font: {
	     fontSize: 16,
	     fontWeight: 'bold'
	  },
	  left: 10,
	  color: 'black',
});



var row4 = Ti.UI.createTableViewRow({
    backgroundColor: 'white',
    height: 30,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var monthly_direct = Titanium.UI.createLabel({
    text: "Monthly Direct",
		textAlign: 'left',
	  font: {
	     fontSize: 16,
	     fontWeight: 'bold'
	  },
	  left: 10,
	  color: 'black',
});



Ti.UI.currentWindow.add(tableview);


tableview.setData(data);