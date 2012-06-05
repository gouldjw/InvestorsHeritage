var data = [];

var db = Titanium.Database.install('../../../../ih.sqlite', 'legacy_modal_premium_rates');


//var rows= db.execute('SELECT * FROM final_expense_rate where issue_age="26" AND plan="Full Benefit" AND  sex="Male" AND  tobacco_status="Tobacco" limit 1; ');
//var rows = db.execute('SELECT * FROM final_expense_rate where issue_age="'+Ti.App.Properties.getString('feii_issue_age')+'"  AND plan="'+Ti.App.Properties.getString('feii_plan')+'" AND  sex="'+Ti.App.Properties.getString('feii_sex')+'" AND  tobacco_status="'+Ti.App.Properties.getString('feii_tobacco_status')+'" AND pay_period="'+Ti.App.Properties.getString('feii_premium_period')+'" limit 1'); 
//	alert(Ti.App.Properties.getString('feii_premium_period'));
//	alert(real_pay[0]);

var  age_raw=    Ti.App.Properties.getString('issue_age');
var age_prepare = age_raw.split('-');
var safe_age = age_prepare[0];

if(Ti.App.Properties.getString('signed') =="Yes"){
	var isSigned ='Signed';
} else{
	var isSigned='Unsigned';
}

// for pay period 1
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="1" limit 1');
var rate_per_1k_1 =rows.fieldByName('rate_per_1000');
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="2" limit 1');
var rate_per_1k_2 =rows.fieldByName('rate_per_1000');
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="3" limit 1');
var rate_per_1k_3 =rows.fieldByName('rate_per_1000');
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="4" limit 1');
var rate_per_1k_4 =rows.fieldByName('rate_per_1000');
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="5" limit 1');
var rate_per_1k_5 =rows.fieldByName('rate_per_1000');
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="7" limit 1');
var rate_per_1k_7 =rows.fieldByName('rate_per_1000');
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="MIB Guaranteed Issue" AND pay_period="10" limit 1');
var rate_per_1k_10 =rows.fieldByName('rate_per_1000');
	rows.close();
//alert(rate_per_1k_1)
var funeral_amount_div_1k = Ti.App.Properties.getString('lgm_funeral_amount') /1000;


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
