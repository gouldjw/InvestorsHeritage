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
		 	var prem_1k =rows.fieldByName('rate_per_1000');
		 		rows.next();
			}
	rows.close();

//alert('funeral amount');

// policy face amount


//name plate

//2d matrix
//age prem/1000 total prem




var single_premium_due = Ti.UI.createImageView({
    image: '/images/policy_face_ammount.png',
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

 //Ti.App.Properties.setString('lspr_age', e.value);
	//var real_age_tmp = e.value.split('-');
	//var real_age = real_age_tmp[0];

var age = Ti.UI.createLabel({
    left : 20,  
    top: 150,
    text:"Age:"+ Ti.App.Properties.getString('lspr_age') });

Ti.UI.currentWindow.add(age);                


var prem = Ti.UI.createLabel({
    left : 20,   
    top: 170,        
    text:"prem/1000:" + prem_1k
});

Ti.UI.currentWindow.add(prem);

var faceamnt = Ti.UI.createLabel({
    left : 20,  
    top: 190,         
    text:"Face Amt:" +Ti.App.Properties.getString('lspr_face_amount') 
});

Ti.UI.currentWindow.add(faceamnt);

 

//r(i=0;i<10;i++);
// {
//     var row = Ti.UI.createTableViewRow();
//     var row2 = Ti.UI.createTableViewRow();
// 
//     var view1 = Ti.UI.createLabel({
//         left : 0,
//         width : "33%",
//         text:"Age"
//     });
//     var view2 = Ti.UI.createView({
//         left : "33%",
//         width : "33%",
// 				height:'20px',
//         backgroundColor : "red"
//     });
//     var view3 = Ti.UI.createView({
//         left : "66%",
//         width : "33%",
//         backgroundColor : "green"
//     });
// 		 var view4 = Ti.UI.createView({
// 	        left : 0,
// 	        width : "33%",
// 	        backgroundColor : "green"
// 	    });
// 	    var view5 = Ti.UI.createView({
// 	        left : "33%",
// 	        width : "33%",
// 	        backgroundColor : "blue"
// 	    });
// 	    var view6 = Ti.UI.createView({
// 	        left : "66%",
// 	        width : "33%",
// 	        backgroundColor : "red"
// 	    });
//     
//     row.add(view1);
//     row.add(view2);
//     row.add(view3);
//     rowData.push(row);
// 
//     row2.add(view4);
//     row2.add(view5);
//     row2.add(view6);
//     rowData.push(row2);
// }
 
// var tblview = Ti.UI.createTableView({
//     data : rowData,
//     top : 170,
// 		width:300,
// 		bottom:180
// });
 
//Ti.UI.currentWindow.add(tblview);