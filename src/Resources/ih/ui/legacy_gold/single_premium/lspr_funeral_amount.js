
var rows = db.execute('SELECT * FROM legacy_single_premium_rates limit 1');
//	alert(rows.rate_per_1000);
	//alert(real_pay[0]);
while (rows.isValidRow()){
		 	
		 		rows.next();
			}
	rows.close();

alert('funeral amount');