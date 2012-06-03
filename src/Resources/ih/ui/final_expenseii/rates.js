var data = [];

var db = Titanium.Database.install('../../../ih.sqlite', 'ihcalc');

var rows = db.execute('SELECT * FROM final_expense_rate where issue_age="'+ Ti.App.Properties.getString('feii_issue_age') + '" AND plan="'+ Ti.App.Properties.getString('feii_plan') +'" AND  sex="' + Ti.App.Properties.getString('feii_sex') + '" AND  tobacco_status="' + Ti.App.Properties.getString('feii_tobacco_status') +'" AND pay_period="' + Ti.App.Properties.getString('feii_pay_period') +'" limit 1');
	alert(rows +'  ROW COUNT = ' + rows.getRowCount());
while (rows.isValidRow()){
		 	
		 		rows.next();
			}
	rows.close();
///////////////// variables to calculate table //////////////////
var annual_policy_fee =50.0;




var feii_modal_prem = Ti.UI.createImageView({
    image: '/images/feii_modal_premiums.png',
    width: 260,
    top: 1
});


var name_plate = Ti.UI.createImageView({
    image: '/images/name_plate.png',
    top: 70,
    width: '95%'
});


Ti.UI.currentWindow.add(feii_modal_prem);
Ti.UI.currentWindow.add(name_plate);

var customer_name = Ti.UI.createLabel({
	top:32,
	text: Ti.App.Properties.getString('feii_name') || 'No Name',
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
	text: 'Volume: $'+ Ti.App.Properties.getString('feii_face_amount') ,
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
	text: 'Issue Age: '+ Ti.App.Properties.getString('feii_issue_age') ,
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


var row2 = Ti.UI.createTableViewRow({
    backgroundColor: 'white',
    height: 30,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var semi_annual = Titanium.UI.createLabel({
    text: "Semi-Annual",
		textAlign: 'left',
	  font: {
	     fontSize: 16,
	     fontWeight: 'bold'
	  },
	  left: 10,
	  color: 'black',
});

var row3 = Ti.UI.createTableViewRow({
    backgroundColor: 'white',
    height: 30,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var quarterly = Titanium.UI.createLabel({
    text: "Quarterly",
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


var row5 = Ti.UI.createTableViewRow({
    backgroundColor: 'white',
    height: 30,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var monthly_pac = Titanium.UI.createLabel({
    text: "Monthly PAC",
		textAlign: 'left',
	  font: {
	     fontSize: 16,
	     fontWeight: 'bold'
	  },
	  left: 10,
	  color: 'black',
});

var bottom_note = Ti.UI.createImageView({
    image: '/images/bottom_note.png',
		width:'95%',
		bottom:1
});

 bottom_note.addEventListener('click', function(){
   Titanium.Platform.openURL('tel:18004222011');
 });

Ti.UI.currentWindow.add(tableview);
Ti.UI.currentWindow.add(bottom_note);


row.add(annual);
data.push(row);
row2.add(semi_annual);
data.push(row2);
row3.add(quarterly);
data.push(row3);
row4.add(monthly_direct);
data.push(row4);
row5.add(monthly_pac);
data.push(row5);
tableview.setData(data);
// 		var row2 = Ti.UI.createTableViewRow({backgroundColor:'white',  selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE});
// 		
// 		row2.add(label2);
// 		data.push(row2);
// 		

//
//	// close database

//	
//tableview.setData(data);


