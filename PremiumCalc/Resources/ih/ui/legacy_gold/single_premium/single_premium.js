//        //   var a = Titanium.UI.createAlertDialog({
//        //   	title:'Issue Age Not Available',
//        //   	message:'This policy is only avaliable to customers between the age of \n 0 - 80. \n\r If you entered the wrong age by accident, please tap the Cancel button and reenter the correct age. \n\r If your customer is older than 80, please tap the LGSP button to go to the correct policy.',
//        //   	buttonNames: ["Cancel", "LGSP"],
//        //   	
//        //   });
//        //
//        //   a.show();
//






var data = [];
/*
* TYPES of field in the form
*/

var TEXT_FIELD = 1;
var LABEL_FIELD = 2;
var TEXTAREA_FIELD = 3;
var NUMBER_FIELD = 4;
var PICKER_FIELD = 5;
var tableview;

/* Fields, check validations.....
* It gets the field where the value is from the id. 
*/
function getField(id) {
    for (i = 0; i < data.length; i++) {
        if (data[i].children[0].text == id) {
            return data[i].children[2];
        }
    }
}

function selectField(id) {
    for (i = 0; i < data.length; i++) {
        if (data[i].children[0].text == id) {
            data[i].children[2].focus();
        }
    }
}



var done = Titanium.UI.createButton({
    title: 'Done',
    style: Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer = Titanium.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var previous = Titanium.UI.createButton({
    title: 'Previous',
    style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var next = Titanium.UI.createButton({
    title: 'Next',
    style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});


/* Creates the fields of the row//{{{
* IT creates a row as follows:
*  label ----- textfield/label
* 
* name : Text of the label
* type_filed : if the element in the second column it's a label or a textfield
* value: for the element in the second column
*/
function createStandardRow(id, name, type_field, value, picker_array, previousFld, nextFld) {
    type_field = type_field || TEXT_FIELD;
    // by default
    var row = Ti.UI.createTableViewRow({
        hasChild: false,
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
    });
    row.height = 40;
    var label_id = Titanium.UI.createLabel({
        //store in order to get it later
        text: id,
        visible: false,
        width: '1',
        height: '1'
    });
    row.add(label_id);

    var label = Titanium.UI.createLabel({
        text: name + ':',
        textAlign: 'left',
        font: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        left: 10,
        color: 'black',
        width: '200',
        height: 40
    });
    row.add(label);
    var field;
    switch (type_field) {
    case TEXT_FIELD:
        field = Titanium.UI.createTextField({
            color: '#000',
            height: 40,
            left: 90,
            textAlign: 'right',
            font: {
                fontSize: 16
            },
            width: 200,
            value: value,
            id: id,
            keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
            returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS,
            keyboardToolbar: [previous, next, spacer, done],
            keyboardToolbarColor: '#999',
            keyboardToolbarHeight: 44
        });

        previous.addEventListener('click',
        function() {
        	if (previousFld == '') {field.blur();}
            else {selectField(previousFld);}
        });

        next.addEventListener('click',
        function() {
            if (nextFld == '') {field.blur();}
            else {selectField(nextFld);}
        });

        done.addEventListener('click',
        function() {
            field.blur();
        });
        
        field.addEventListener('blur',
        function(e) {
            check_show_calculate();
            if (e.source == '[object name]') {
                // lets blank them out before setting them
                // Ti.App.Properties.setString('lspr_name', '');
                Ti.App.Properties.setString('lspr_name', e.value);
            }
            
			Ti.UI.currentWindow.title = 'LG Single';
        });
        
        field.addEventListener('focus',
        function(e) {
        	Ti.UI.currentWindow.title = name;
        });
        break;
    case NUMBER_FIELD:
        var num_done = Titanium.UI.createButton({
            title: 'Done',
            style: Titanium.UI.iPhone.SystemButtonStyle.DONE
        });

        var num_spacer = Titanium.UI.createButton({
            systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
        });


        var num_previous = Titanium.UI.createButton({
            title: 'Previous',
            style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
        });

        var num_next = Titanium.UI.createButton({
            title: 'Next',
            style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
        });
        
        num_previous.addEventListener('click',
        function() {
        	if (previousFld == '') {field.blur();}
        	else {selectField(previousFld);}
        });

        num_next.addEventListener('click',
        function() {
            if (nextFld == '') {field.blur();}
            else {selectField(nextFld);}
        });
        
        field = Titanium.UI.createTextField({
            color: '#000',
            height: 48,
            left: 90,
            textAlign: 'right',
            font: {
                fontSize: 16
            },
            width: 200,
            value: value,
            id: id,
            keyboardType: Titanium.UI.KEYBOARD_PHONE_PAD,
            returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
            keyboardToolbar: [num_previous, num_next, num_spacer, num_done],
            keyboardToolbarColor: '#999',
            keyboardToolbarHeight: 44
        });

        num_previous.addEventListener('click',
        function() {
            field.blur();
        });

        num_next.addEventListener('click',
        function() {
            field.blur();
        });

        num_done.addEventListener('click',
        function(e) {
            field.blur();
        });
        field.addEventListener('blur',
        function(e) {
            check_show_calculate();


            if (e.source == '[object amount]') {
                // lets blank them out before setting them
                Ti.App.Properties.setString('amount', e.value);

            }
            
			Ti.UI.currentWindow.title = 'LG Single';
        });
        
        field.addEventListener('focus',
        function(e) {
        	Ti.UI.currentWindow.title = name;
        });
        break;
    case PICKER_FIELD:
        //	Ti.API.log(picker_array);
        field = Titanium.UI.createTextField({
            color: '#000',
            height: 48,
            left: 90,
            textAlign: 'right',
            font: {
                fontSize: 16
            },
            width: 200,
            value: value,
            id: id,
            // keyboardType: PICKER_TYPE_PLAIN,
            returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
        });


        var picker_view = Titanium.UI.createView({
            height: 251,
            bottom: -251
        });


        var picker_done = Titanium.UI.createButton({
            title: 'Done',
            style: Titanium.UI.iPhone.SystemButtonStyle.DONE
        });

        var picker_spacer = Titanium.UI.createButton({
            systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
        });


        var picker_previous = Titanium.UI.createButton({
            title: 'Previous',
            style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
        });

        var picker_next = Titanium.UI.createButton({
            title: 'Next',
            style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
        });

        picker_previous.addEventListener('click',
        function() {
        	tableview.height = 320;
            field.value = picker.getSelectedRow(0).title;
            picker_view.animate(slide_out);
            Ti.App.Properties.setString(id, field.value);
            Ti.UI.currentWindow.title = 'Final Expense II';
            selectField(previousFld);
            check_show_calculate();
        });

        picker_next.addEventListener('click',
        function() {
        	tableview.height = 320;
            field.value = picker.getSelectedRow(0).title;
            picker_view.animate(slide_out);
            Ti.App.Properties.setString(id, field.value);
            Ti.UI.currentWindow.title = 'Final Expense II';
            selectField(nextFld);
            check_show_calculate();
        });


        var toolbar = Titanium.UI.iOS.createToolbar({
            top: 0,
            items: [picker_previous, picker_next, picker_spacer, picker_done],
            barColor: '#999',

        });

        var picker = Titanium.UI.createPicker({
            top: 43
        });
        picker.selectionIndicator = true;

        var picker_data = [];


        for (i = 0; i < picker_array.length; i++) {
            picker_data.push(Titanium.UI.createPickerRow({
                title: picker_array[i]
            }));

        }

        picker.add(picker_data);

        picker_view.add(toolbar);
        picker_view.add(picker);



        var slide_in = Titanium.UI.createAnimation({
            bottom: 0
        });
        var slide_out = Titanium.UI.createAnimation({
            bottom: -251
        });

        //	field.addEventListener('blur',function() {
        //		tableview.height = 300;
        //		picker_view.animate(slide_out);
        //	});
        field.addEventListener('focus',
        function() {
            tableview.height = 430;


            picker_view.animate(slide_in);
            field.blur();
        });

        picker_done.addEventListener('click',
        function(e) {
            tableview.height = 320;

            field.value = picker.getSelectedRow(0).title;
            //	if(calculate != null){
            //	calculate.show();
            //	}
            picker_view.animate(slide_out);
            Ti.App.Properties.setString(id, field.value);

            // alert(Ti.App.Properties.getString(id));
            Ti.UI.currentWindow.title = 'LG Single';
        });


        //tableview.add(picker_view);
        Ti.UI.currentWindow.add(picker_view);
        picker_view.zIndex = 100;

        field.addEventListener('blur',
        function(e) {

            check_show_calculate();
            // alert(Ti.App.Properties.getString(id));
        });


        //     if (e.source == '[object issue_age]') {
        //         // lets blank them out before setting them
        //         //Ti.App.Properties.setString('feii_sex', '');
        //         Ti.App.Properties.setString('lspr_age', e.value);
        // 				var real_age_tmp = e.value.split('-');
        // 				var real_age = real_age_tmp[0];
        // 				//var age_range = e.value;
        //          // Ti.App.Properties.setString('feii_premium_period', real_pay[0]);
        //     }
        // 		//signed
        // 		        if (e.source == '[object signed]') {
        //
        // 							//	var signed = e.value;
        // 	                Ti.App.Properties.setString('lspr_signed', e.value);
        //             }
        //
        //
        //});
        
        field.addEventListener('focus',
        function(e) {
        	Ti.UI.currentWindow.title = name;
        });
        break;

    };
    row.add(field);
    return row;
}
//}}}
/*
* <!-- Creating rows -->
*/


tableview = Titanium.UI.createTableView({
    top: 0,
    left: 0,
    bottom: 100,
    right: 0,
    backgroundImage: '../../images/bg.png',

    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var table_height = tableview.height;



var row = createStandardRow('name', 'Name', TEXT_FIELD, "", '', '', 'issue_age');
//row.header="";
//row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('issue_age', 'Issue Age', PICKER_FIELD, "", ["0-50", "51-60", "61-65", "66-70", "71-75", "76-80", "81-85", "86-100"], 'name', 'type');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('type', 'Type', PICKER_FIELD, "", ["Funeral Amount", "Premium Amount"], 'issue_age', 'amount');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);


row = createStandardRow('amount', 'Amount', NUMBER_FIELD, "", '', 'type', 'signed');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('signed', 'Signed By Insured', PICKER_FIELD, "", ["Yes", "No"], 'amount', '');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);


row = Ti.UI.createTableViewRow({
    height: 210
});



function check_show_calculate() {
    //	alert(Ti.App.Properties.getString('feii_name') +"\n\r "+ Ti.App.Properties.getString('feii_issue_age') +"\n\r "+  Ti.App.Properties.getString('feii_sex') +"\n\r "+  Ti.App.Properties.getString('feii_plan') +" \n\r"+  Ti.App.Properties.getString('feii_tobacco_status') +"\n\r "+  Ti.App.Properties.getString('feii_premium_period') +"\n\r "+ Ti.App.Properties.getString('feii_face_amount'));
    try { no_calculate.remove(no_calculate.children[0]); }
	catch(e) {}
    
    if (getField('name').value != '' && getField('issue_age').value != '' && getField('type').value != '' && getField('amount').value != '' && getField('signed').value != '') {
        Ti.App.Properties.setString('calculate_button_active', "true");
        var calculate = Ti.UI.createButton({
            //title: "Legacy Gold Preneed Rate Calculator",
            width: 280,
            height: 49,
            bottom: 0,
            backgroundImage: '/images/calculate.png',
            //backgroundLeftCap: 10,
        });

        //calculate button needs to be in a disabled state until all fields are present
        // calculate button should change state once all fields are present

        calculate.addEventListener('click',
        function(e) {

            //		alert('name: ' + Ti.App.Properties.getString('feii_name') + '\n issue age: ' + Ti.App.Properties.getString('feii_issue_age') + '\n sex: ' + Ti.App.Properties.getString('feii_sex') + '\n plan: ' + Ti.App.Properties.getString('feii_plan'));
            var rates = Ti.UI.createWindow({
                backButtonTitle: 'Back',
                title: 'Rates',
                barColor: 'black',
                navBarHidden: false,
                tabBarHidden: true,
                backgroundImage: '/images/bg.png',
                orientationModes: [Ti.UI.PORTRAIT],
                url: "rates.js"
            });

       

            var infoButton = Ti.UI.createButton({
                systemButton: Titanium.UI.iPhone.SystemButton.INFO_LIGHT
            });

            rates.setRightNavButton(infoButton);


            infoButton.addEventListener('click',
            function(e) {
                var infoWindow = Ti.UI.createWindow({
                    backButtonTitle: 'Back',
                    title: 'Notes',
                    barColor: 'black',
                    navBarHidden: false,
                    tabBarHidden: true,

                    orientationModes: [Ti.UI.PORTRAIT],
                    url: "single_notes.js"
                    // url:"ih/ui/email/email.js",
                    // evalhtml:true
                });

                tabGroup.activeTab.open(infoWindow, {
                    animated: true
                });
            });



            // get tab group object
            var tabGroup = Ti.UI.currentWindow.tabGroup;
            tabGroup.activeTab.open(rates, {
                animated: true
            });
        });


        //row = Ti.UI.createTableViewRow();
        //	Ti.UI.currentWindow.remove(no_calculate);
        no_calculate.add(calculate);


    }
}

var no_calculate = Ti.UI.createButton({
    //title: "Legacy Gold Preneed Rate Calculator",
    width: 280,
    height: 49,
    bottom: 30,
    backgroundImage: '/images/no_calculate.png',
    //backgroundLeftCap: 10,
});

Ti.UI.currentWindow.add(no_calculate);
//data.push(row);
tableview.setData(data);
Ti.UI.currentWindow.add(tableview);


done.addEventListener('click',
function() {

    field.blur();
    //	picker_view.animate(slide_out);

});




/* SAVE
* It saves the form.
*/








