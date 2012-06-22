var data = [];

var db = Titanium.Database.install('../../../ih.sqlite', 'final_expense_rate');

//		var real_pay = e.value.split(' ');
var premium_period_raw = Ti.App.Properties.getString('premium_period');
if (premium_period_raw == "To Age 100") {
			var safe_premium_period = 100 - Ti.App.Properties.getString('issue_age');
    } else {
    var prem_prd = premium_period_raw.split(' ');
    var safe_premium_period = prem_prd[0];
}
//alert(safe_premium_period);
//			alert('debugger value for \n\r' +  Ti.App.Properties.getString('feii_premium_period') );
//var rows= db.execute('SELECT * FROM final_expense_rate where issue_age="26" AND plan="Full Benefit" AND  sex="Male" AND  tobacco_status="Tobacco" limit 1; ');
var rows = db.execute('SELECT * FROM final_expense_rate where issue_age="' + Ti.App.Properties.getString('issue_age') + '"  AND plan="' + Ti.App.Properties.getString('plan') + '" AND  sex="' + Ti.App.Properties.getString('sex') + '" AND  tobacco_status="' + Ti.App.Properties.getString('tobacco_status') + '"OR tobacco_status="NA" AND pay_period="' + safe_premium_period + '" limit 1');
//	alert(Ti.App.Properties.getString('feii_premium_period'));
//	alert(real_pay[0]);
//alert('Debugger to correct slider focus issue\n\r' +Ti.App.Properties.getString('issue_age')+'"  AND plan="'+Ti.App.Properties.getString('plan')+'" AND  sex="'+Ti.App.Properties.getString('sex')+'" AND  tobacco_status="'+Ti.App.Properties.getString('tobacco_status')+'" AND pay_period="'+safe_premium_period);
while (rows.isValidRow()) {

    var rate_per_1000 = rows.fieldByName('rate_per_1000');
    //alert(rows.fieldByName('rate_per_1000'));
    rows.next();
}
rows.close();
///////////////// variables to calculate table //////////////////
var annual_policy_fee = 50.0;

//	var rate_per_1000='34.76';
//alert(parseFloat('23.09'));

var feii_modal_prem = Ti.UI.createImageView({
    image: '/images/feii_modal_premiums.png',
    width: 260,
    top: 6
});


var name_plate = Ti.UI.createImageView({
    image: '/images/name_plate.png',
    top: 70,
    width: '95%'
});


Ti.UI.currentWindow.add(feii_modal_prem);
Ti.UI.currentWindow.add(name_plate);

var customer_name = Ti.UI.createLabel({
    top: 5,
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
    top: 25,
    text: 'Volume: $' + Ti.App.Properties.getString('face_amount'),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 10,
    color: 'black',
});

name_plate.add(volume);

function getDate() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();

    return month + "/" + day + "/" + year;
}

var date_label = Ti.UI.createLabel({
    top: 5,
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
    top: 25,
    text: 'Issue Age: ' + Ti.App.Properties.getString('issue_age'),
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

var annual_rate = rate_per_1000 * 5 + 50;
var semi_annual = annual_rate * 0.52;
var quarter = annual_rate * 0.27;
var monthly_direct = annual_rate * 0.095;
var monthly_pac = annual_rate * 0.088;

var annual_value = Titanium.UI.createLabel({
    text: '$' + annual_rate.toFixed(2),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 210,
    color: 'black',
});

var semi_annual_value = Titanium.UI.createLabel({
    text: '$' + semi_annual.toFixed(2),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 210,
    color: 'black',
});

var quarterly_value = Titanium.UI.createLabel({
    text: '$' + quarter.toFixed(2),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 210,
    color: 'black',
});

var monthly_direct_value = Titanium.UI.createLabel({
    text: '$' + monthly_direct.toFixed(2),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 210,
    color: 'black',
});

var annual_value = Titanium.UI.createLabel({
    text: '$' + annual_rate.toFixed(2),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 210,
    color: 'black',
});

var monthly_pac_value = Titanium.UI.createLabel({
    text: '$' + monthly_pac.toFixed(2),
    textAlign: 'left',
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    left: 210,
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
    width: '95%',
    bottom: 1
});

bottom_note.addEventListener('click',
function() {
    Titanium.Platform.openURL('tel:18004222011');
});

Ti.UI.currentWindow.add(tableview);
Ti.UI.currentWindow.add(bottom_note);


row.add(annual);
row.add(annual_value);

data.push(row);
row2.add(semi_annual);
row2.add(semi_annual_value);

data.push(row2);

row3.add(quarterly);
row3.add(quarterly_value);
data.push(row3);
row4.add(monthly_direct);
row4.add(monthly_direct_value);
data.push(row4);
row5.add(monthly_pac);
row5.add(monthly_pac_value);

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

