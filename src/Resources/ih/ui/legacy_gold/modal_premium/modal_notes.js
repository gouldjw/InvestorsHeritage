//var data = [];
//
// tableview = Titanium.UI.createTableView({
//                  top:0, left:0, bottom:0, right:0,
//									
//              style: Titanium.UI.iPhone.TableViewStyle.GROUPED});
//
//			var row = Ti.UI.createTableViewRow();
//	
//			 var label = Titanium.UI.createLabel({
//	        text: 'modal notes here',
//					backgroundImage:'../../images/calculate.png',
//	    });
//			Ti.UI.currentWindow.add(tableview);
//	
//	    row.add(label);
//			data.push(row);
//			 tableview.setData(data);
//	
//
//
//// this will take one of three arguments for its out put
//  


// licensed MIT.
// copyright Daniel Tamas
// http://rborn.info

Titanium.UI.setBackgroundColor('#000');


var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#000'
});




var tr = Titanium.UI.create2DMatrix();
tr = tr.rotate(90);





var my_combo = Titanium.UI.createTextField({
	hintText:"write your name or select one",
	height:40,
	width:300,
	top:20,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	//rightButton:drop_button,
	rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});



var picker_view = Titanium.UI.createView({
	height:251,
	bottom:-251
});

var cancel =  Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var done =  Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer =  Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var toolbar =  Titanium.UI.iOS.createToolbar({
	top:0,
	items:[cancel,spacer,done]
});

var picker = Titanium.UI.createPicker({
		top:43
});
picker.selectionIndicator=true;

var picker_data = [
	Titanium.UI.createPickerRow({title:'Male'}),
	Titanium.UI.createPickerRow({title:'Female'}),
];


picker.add(picker_data);

picker_view.add(toolbar);
picker_view.add(picker);



var slide_in =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-251});



//my_combo.addEventListener('focus', function() {
//	picker_view.animate(slide_out);
//});

my_combo.addEventListener('focus',function() {
	picker_view.animate(slide_in);
	my_combo.blur();
});

cancel.addEventListener('click',function() {
	picker_view.animate(slide_out);
});

done.addEventListener('click',function() {
	my_combo.value =  picker.getSelectedRow(0).title;
	picker_view.animate(slide_out);
});




win1.add(picker_view);
win1.add(my_combo);

win1.open();
