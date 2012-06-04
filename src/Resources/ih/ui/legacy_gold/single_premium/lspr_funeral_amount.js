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

// single premium due

//name plate

//2d matrix
//age prem/1000 total prem