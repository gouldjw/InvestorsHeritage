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
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="1" limit 1');
var rate_per_1k_1 =rows.fieldByName('rate_per_1000');                                                                                  
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="2" limit 1');
var rate_per_1k_2 =rows.fieldByName('rate_per_1000');                                                                                  
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="3" limit 1');
var rate_per_1k_3 =rows.fieldByName('rate_per_1000');                                                                                  
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="4" limit 1');
var rate_per_1k_4 =rows.fieldByName('rate_per_1000');                                                                                  
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="5" limit 1');
var rate_per_1k_5 =rows.fieldByName('rate_per_1000');                                                                                  
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="7" limit 1');
var rate_per_1k_7 =rows.fieldByName('rate_per_1000');                                                                                  
var rows = db.execute('SELECT * FROM legacy_modal_premium_rates where issue_age="'+safe_age+'" AND simplified_issue_guaranteed_issue ="Full Benefit Simplified Issue" AND pay_period="10" limit 1');
var rate_per_1k_10 =rows.fieldByName('rate_per_1000');
	rows.close();
//alert(rate_per_1k_1)
var funeral_amount_div_1k = Ti.App.Properties.getString('lgm_funeral_amount') /1000;


var mpgi = Ti.UI.createImageView({
    image: '/images/msi.png',
    width: 240,
    top: -20
});

var name_plate = Ti.UI.createImageView({
    image: '/images/name_plate.png',
    top: 50,
    width: '95%'
});


Ti.UI.currentWindow.add(mpgi);
Ti.UI.currentWindow.add(name_plate);

var customer_name = Ti.UI.createLabel({
	top:32,
	text: Ti.App.Properties.getString('lgm_name') || 'No Name',
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
	text: 'Funeral Amt: $'+ Ti.App.Properties.getString('lgm_funeral_amount') ,
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 10,
  color: 'black',
});

var issue_age = Ti.UI.createLabel({
	top:52,
	text: 'Age:'+ Ti.App.Properties.getString('issue_age') ,
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 200,
  color: 'black',
});

name_plate.add(volume);
name_plate.add(issue_age);

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

var monthly_direct = Ti.UI.createView({ backgroundColor:'transparent' });
var monthly_pat = Ti.UI.createView({ backgroundColor:'transparent' });

var theNumbers = Ti.UI.createScrollableView({
	height:270,
	bottom:0,
  views:[monthly_direct, monthly_pat],
  showPagingControl:true
});

Ti.UI.currentWindow.add(theNumbers);
var monthly_direct_goods = Ti.UI.createImageView({
    image: '/images/monthly_direct.png',
 
});

monthly_direct.add(monthly_direct_goods);

Ti.UI.currentWindow.add(theNumbers);
var monthly_pat_goods = Ti.UI.createImageView({
    image: '/images/monthly_pat.png',
 
});

monthly_pat.add(monthly_pat_goods);

//scrollable views here
// v1 = monthly_direct
// v2 = monthly_pat




					var one_year_pay_value    = funeral_amount_div_1k * rate_per_1k_1  ;
					var two_year_pay_value    = funeral_amount_div_1k * rate_per_1k_2;
					var three_year_pay_value  = funeral_amount_div_1k * rate_per_1k_3;
					var four_year_pay_value   = funeral_amount_div_1k * rate_per_1k_4;
					var five_year_pay_value   = funeral_amount_div_1k * rate_per_1k_5;
					var seven_year_pay_value  = funeral_amount_div_1k * rate_per_1k_7;
					var ten_year_pay_value    = funeral_amount_div_1k * rate_per_1k_10;

					var one_year_pay_label = Ti.UI.createLabel({
						top:48,
						text: '$ '+one_year_pay_value.toFixed(2) , 
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});

					var two_year_pay_label = Ti.UI.createLabel({
						top:78,
						text:  '$ '+two_year_pay_value.toFixed(2) ,
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});
					var three_year_pay_label = Ti.UI.createLabel({
						top:108,
						text:  '$ '+ three_year_pay_value.toFixed(2) ,
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});
					var four_year_pay_label = Ti.UI.createLabel({
						top:136,
						text:'$ '+ four_year_pay_value.toFixed(2) ,
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});
					var five_year_pay_label = Ti.UI.createLabel({
						top:164,
						text: '$ '+five_year_pay_value.toFixed(2) ,
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});
					var seven_year_pay_label = Ti.UI.createLabel({
						top:190,
						text: '$ '+seven_year_pay_value.toFixed(2) ,
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});

					var ten_year_pay_label = Ti.UI.createLabel({
						top:220,
						text: '$ '+ten_year_pay_value.toFixed(2) ,
						textAlign: 'left',
					  font: {
					     fontSize: 16,
					     fontWeight: 'bold'
					  },
					  left: 250,
					  color: 'black',
					});

monthly_direct.add(one_year_pay_label);
monthly_direct.add(two_year_pay_label);
monthly_direct.add(three_year_pay_label);
monthly_direct.add(four_year_pay_label);
monthly_direct.add(five_year_pay_label);
monthly_direct.add(seven_year_pay_label);
monthly_direct.add(ten_year_pay_label);


 var  pat1    =  one_year_pay_value   * 0.95;
 var  pat2   =  two_year_pay_value   * 0.95;
 var  pat3   =  three_year_pay_value * 0.95;
 var  pat4   =  four_year_pay_value  * 0.95;
 var  pat5   =  five_year_pay_value  * 0.95;
 var  pat7   =  seven_year_pay_value * 0.95;
 var  pat10  =  ten_year_pay_value   * 0.95;

var total_prem0a = Ti.UI.createLabel({
	top:45,
	text: '$'+ pat1.toFixed(2), 
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});
var total_prem1a = Ti.UI.createLabel({
	top:75,
	text: '$'+ pat2.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});
var total_prem2a = Ti.UI.createLabel({
	top:105,
	text: '$'+ pat3.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});
var total_prem3a = Ti.UI.createLabel({
	top:135,
	text: '$'+ pat4.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});
var total_prem4a = Ti.UI.createLabel({
	top:160,
	text: '$'+ pat5.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});
var total_prem5a = Ti.UI.createLabel({
	top:189,
	text: '$'+ pat7.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});

var total_prem7a = Ti.UI.createLabel({
	bottom:10,
	text: '$'+ pat10.toFixed(2),
	textAlign: 'left',
  font: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  left: 218,
  color: 'black',
});

monthly_pat.add(total_prem0a);
monthly_pat.add(total_prem1a);
monthly_pat.add(total_prem2a);
monthly_pat.add(total_prem3a);
monthly_pat.add(total_prem4a);
monthly_pat.add(total_prem5a);
monthly_pat.add(total_prem7a);




// var issue_age_label = Ti.UI.createLabel({
// 	top:52,
// 	text: 'Issue Age: '+ Ti.App.Properties.getString('lgm_issue_age') ,
// 	textAlign: 'left',
//   font: {
//      fontSize: 16,
//      fontWeight: 'bold'
//   },
//   left: 183,
//   color: 'black',
// });
// 
// name_plate.add(issue_age_label);
// 
//  //Ti.App.Properties.setString('lspr_age', e.value);
// 	//var real_age_tmp = e.value.split('-');
// 	//var real_age = real_age_tmp[0];
// 
// var age = Ti.UI.createLabel({
//     left : 20,  
//     top: 150,
//     text:"Age:"+ Ti.App.Properties.getString('lspr_age') });
// 
// Ti.UI.currentWindow.add(age);                
// 
// 
// var prem = Ti.UI.createLabel({
//     left : 20,   
//     top: 170,        
//     text:"prem/1000:" + rate_per_1k
// });
// 
// Ti.UI.currentWindow.add(prem);
// var total_prem_val = Ti.App.Properties.getString('lspr_funeral_amount') || Math.floor(Math.random()*10000)
// var total_prem = Ti.UI.createLabel({
//     left : 20,  
//     top: 190,         
//     text:"Total Prem:" + total_prem_val
// });
// 
// Ti.UI.currentWindow.add(total_prem);
// 
//  
// 
// //r(i=0;i<10;i++);
// // {
// //     var row = Ti.UI.createTableViewRow();
// //     var row2 = Ti.UI.createTableViewRow();
// // 
// //     var view1 = Ti.UI.createLabel({
// //         left : 0,
// //         width : "33%",
// //         text:"Age"
// //     });
// //     var view2 = Ti.UI.createView({
// //         left : "33%",
// //         width : "33%",
// // 				height:'20px',
// //         backgroundColor : "red"
// //     });
// //     var view3 = Ti.UI.createView({
// //         left : "66%",
// //         width : "33%",
// //         backgroundColor : "green"
// //     });
// // 		 var view4 = Ti.UI.createView({
// // 	        left : 0,
// // 	        width : "33%",
// // 	        backgroundColor : "green"
// // 	    });
// // 	    var view5 = Ti.UI.createView({
// // 	        left : "33%",
// // 	        width : "33%",
// // 	        backgroundColor : "blue"
// // 	    });
// // 	    var view6 = Ti.UI.createView({
// // 	        left : "66%",
// // 	        width : "33%",
// // 	        backgroundColor : "red"
// // 	    });
// //     
// //     row.add(view1);
// //     row.add(view2);
// //     row.add(view3);
// //     rowData.push(row);
// // 
// //     row2.add(view4);
// //     row2.add(view5);
// //     row2.add(view6);
// //     rowData.push(row2);
// // }
//  
// // var tblview = Ti.UI.createTableView({
// //     data : rowData,
// //     top : 170,
// // 		width:300,
// // 		bottom:180
// // });
//  
//Ti.UI.currentWindow.add(tblview);