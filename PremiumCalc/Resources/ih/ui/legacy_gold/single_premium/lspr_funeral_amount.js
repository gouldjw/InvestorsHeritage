//  1.	If Funeral Amount:
//  a.	Then, divide the entered Funeral Amount by 1000 and store the answer in memory as “SP_fAmDiv1000”
//  b.	Then, multiply “SP_fAmDiv1000” by the “ratePer1000” to find the Single Premium Due.

//  b.	VARIATIONS to the RULES:
//  i.	If Signed By Insured is equal to Yes, then proceed with the above explanation.
//  ii.	If Signed By Insured is equal to No, then do not query the database and automatically use 999 as the “Rate per 1000.”


var data = [];

var db = Titanium.Database.install('../../../../ih.sqlite', 'legacy_single_premium_rates');


var  age_raw=    Ti.App.Properties.getString('issue_age');
var age_prepare = age_raw.split('-');
var safe_age = age_prepare[0];

if(Ti.App.Properties.getString('signed') =="Yes"){
	var isSigned ='Signed';
} else{
	var isSigned='Unsigned';
}
//var rows= db.execute('SELECT * FROM final_expense_rate where issue_age="26" AND plan="Full Benefit" AND  sex="Male" AND  tobacco_status="Tobacco" limit 1; ');
//var rows = db.execute('SELECT * FROM final_expense_rate where issue_age="'+Ti.App.Properties.getString('feii_issue_age')+'"  AND plan="'+Ti.App.Properties.getString('feii_plan')+'" AND  sex="'+Ti.App.Properties.getString('feii_sex')+'" AND  tobacco_status="'+Ti.App.Properties.getString('feii_tobacco_status')+'" AND pay_period="'+Ti.App.Properties.getString('feii_premium_period')+'" limit 1'); 
//	alert(Ti.App.Properties.getString('feii_premium_period'));
//	alert(real_pay[0]);

var rows = db.execute('SELECT * FROM legacy_single_premium_rates where signed_unsigned="'+isSigned+'" AND issue_age="'+safe_age+'" limit 1');
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


//alert(Ti.App.Properties.getString('lspr_name') +' '+ Ti.App.Properties.getString('issue_age')+' '+Ti.App.Properties.getString('lspr_funeral_amount')+' '+Ti.App.Properties.getString('signed'));

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
  left: 215,
  color: 'black',
});

name_plate.add(date_label);

var issue_age_label = Ti.UI.createLabel({
	top:52,
	text: 'Issue Age: '+ Ti.App.Properties.getString('issue_age') ,
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 167,
  color: 'black',
});

name_plate.add(issue_age_label);

 single_premium_due_results =  Ti.UI.createImageView({
    image: '/images/single_premium_due_values.png',
    top: 120,
    width: '95%'
});
Ti.UI.currentWindow.add(single_premium_due_results);


var issue_age_results = Ti.UI.createLabel({
	top:70,
	text: Ti.App.Properties.getString('issue_age') ,
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 18,
  color: 'black',
});
single_premium_due_results.add(issue_age_results);

var prem_per_1k = Ti.UI.createLabel({
	top:70,
	text: prem_1k, 
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 118,
  color: 'black',
});
single_premium_due_results.add(prem_per_1k );

var total_prem_val = (Ti.App.Properties.getString('lspr_funeral_amount') / 1000) * prem_1k;
var total_prem = Ti.UI.createLabel({
	top:70,
	text: total_prem_val.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});
single_premium_due_results.add(total_prem);
