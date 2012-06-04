var data = [];

var db = Titanium.Database.install('../../../../ih.sqlite', 'legacy_single_premium_rates');

//var real_pay = Ti.App.Properties.getString('feii_premium_period').split(' ');


var rows = db.execute('SELECT * FROM legacy_single_premium_rates limit 1');
//	alert(rows.rate_per_1000);
	//alert(real_pay[0]);
while (rows.isValidRow()){
		 	
		 		rows.next();
			}
	rows.close();

alert('face amount');