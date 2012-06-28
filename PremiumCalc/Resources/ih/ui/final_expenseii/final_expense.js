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
    style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
    font: {fontSize: 20}
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
    if (id == 'plan' || id == 'premium_period') {
        hint_text = Titanium.UI.createLabel({
            text: '* see info icon',
            textAlign: 'left',
            font: {
                fontSize: 12,
                fontStyle: 'italic'
            },
            left: -1,
            color: 'black',
            width: '200',
            height: 20,
            bottom: -3
        });
        label.add(hint_text);
    }

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
                //Ti.App.Properties.setString('feii_name', '');
                Ti.App.Properties.setString('feii_name', e.value);
                field.text = Ti.App.Properties.getString('feii_name');
            }
			Ti.UI.currentWindow.title = 'Final Expense II';
        });
        
        field.addEventListener('focus',
        function(e) {
        	Ti.UI.currentWindow.title = name;
        	check_show_calculate();
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
        //ield.addEventListener('click',function(){
        // Ti.UI.currentWindow.title = name;
        //);
        num_done.addEventListener('click',
        function() {
            field.blur();
        });
        
        field.addEventListener('blur',
        function(e) {

            

            if (e.source == '[object issue_age]') {
                // lets blank them out before setting them
                //Ti.App.Properties.setString('feii_issue_age', '');
                
                if (e.value > 80) {
                    // lets blank them out before setting them
                    // Ti.App.Properties.setString('feii_issue_age', '');
                    // Ti.App.Properties.setString('issue_age', e.value);
                    // this needs to be discussed
                    field.value = '';
                    Ti.App.Properties.setString('issue_age', '');
                    
                    Ti.include('too_old_check.js');
                }
                else { Ti.App.Properties.setString('issue_age', e.value); }
            }

            if (e.source == '[object face_amount]') {
                // lets blank them out before setting them
                //Ti.App.Properties.setString('feii_face_amount', '');
                if (e.value != '' && e.value < 2000) {
                	var a = Titanium.UI.createAlertDialog({
						title:'Face Value Below Minimum',
						message:'The face amount must be between $2000 and $25,000.',
						buttonNames: ["Ok"],
					});
					a.show();
					field.value = '';
                }
                else if (e.value != '' && e.value > 25000) {
                	var a = Titanium.UI.createAlertDialog({
						title:'Face Value Above Maximum',
						message:'The face amount must be between $2000 and $25,000.',
						buttonNames: ["Ok"],
					});
					a.show();
					field.value = '';
                }
                else {
                Ti.App.Properties.setString('face_amount', e.value);
                }
            }
            
            check_show_calculate();
            
            Ti.UI.currentWindow.title = 'Final Expense II';
        });
        
        field.addEventListener('focus',
        function(e) {
        	Ti.UI.currentWindow.title = name;
        	check_show_calculate();
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
            barColor: '#999'
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

            //alert(Ti.App.Properties.getString(id));
            Ti.UI.currentWindow.title = 'Final Expense II';
            check_show_calculate();
        });


        //tableview.add(picker_view);
        Ti.UI.currentWindow.add(picker_view);
        picker_view.zIndex = 100;

        field.addEventListener('blur',
        function(e) {

            check_show_calculate();


            //   if (e.source == '[object sex]') {
            //       // lets blank them out before setting them
            //       //Ti.App.Properties.setString('feii_sex', '');
            // 	//	alert('debugger value for \n\r' +  Ti.App.Properties.getString('feii_sex') );
            //   }
            //
            //   if (e.source == '[object plan]') {
            //       // lets blank them out before setting them
            //      // Ti.App.Properties.setString('feii_plan', '');
            //       Ti.App.Properties.setString('feii_plan', e.value);
            // 			alert('debugger value for \n\r' +  Ti.App.Properties.getString('feii_plan') );
            //
            // 			//alert(e.value);
            //   }
            //
            //   if (e.source == '[object tobacco_status]') {
            //       // lets blank them out before setting them
            //       //Ti.App.Properties.setString('feii_tobacco_status', '');
            //       Ti.App.Properties.setString('feii_tobacco_status', e.value);
            // 			alert('debugger value for \n\r' +  Ti.App.Properties.getString('feii_tobacco_status') );
            //
            //
            //   }
            //   if (e.source == '[object premium_period]') {
            //       // lets blank them out before setting them
            //      // Ti.App.Properties.setString('feii_premium_period', '');
            // 	



            //  }
			//Ti.UI.currentWindow.title = 'Final Expense II';
        });
        
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

row = createStandardRow('issue_age', 'Issue Age', NUMBER_FIELD, "", '', 'name', 'sex');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('sex', 'Sex', PICKER_FIELD, "", ["Male", "Female"], 'issue_age', 'plan');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('plan', 'Plan', PICKER_FIELD, "", ["Full Benefit", "Reduced Benefit"], 'sex', 'tobacco_status');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('tobacco_status', 'Tobacco Status', PICKER_FIELD, "", ["Tobacco", "Non-Tobacco"], 'plan', 'premium_period');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('premium_period', 'Premium Period', PICKER_FIELD, "", ["5 Years", "10 Years", "20 Years", "To Age 100"], 'tobacco_status', 'face_amount');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = createStandardRow('face_amount', 'Face Amount', NUMBER_FIELD, "", '', 'premium_period', '');
// row.children[2].borderColor = 'red';
// fieldNonValidated.push(row.children[2]);
data.push(row);

row = Ti.UI.createTableViewRow({
    height: 50
});

function check_show_calculate() {
    //	alert(Ti.App.Properties.getString('feii_name') +"\n\r "+ Ti.App.Properties.getString('feii_issue_age') +"\n\r "+  Ti.App.Properties.getString('feii_sex') +"\n\r "+  Ti.App.Properties.getString('feii_plan') +" \n\r"+  Ti.App.Properties.getString('feii_tobacco_status') +"\n\r "+  Ti.App.Properties.getString('feii_premium_period') +"\n\r "+ Ti.App.Properties.getString('feii_face_amount'));
    //alert(getField('name').value);
    try { no_calculate.remove(no_calculate.children[0]); }
	catch(e) {}
    
    if (getField('name').value != '' && getField('issue_age').value != '' && getField('sex').value != '' && getField('plan').value != '' && getField('tobacco_status').value != '' && getField('premium_period').value != '' && getField('face_amount').value != '') {
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
        	
        	if (getField('face_amount').value > 15000 && (getField('plan').value == 'Reduced Benefit' || getField('issue_age').value > 65))
        	{
        		var a = Titanium.UI.createAlertDialog({
						title:'Face Value Above Maximum',
						message:'For the benefit plan and/or age you\'ve selected, the maximum face amount is $15,000.',
						buttonNames: ["Ok"],
					});
				a.show();
				return;
        	}

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
       

           // var emailButton = Ti.UI.createButton({
           //     image: '/images/email_icon.png',
           //     left: 0,
           //     width: '58px',
           //     height: '40px'
           // });
           		var infoButton = Ti.UI.createButton({
									    systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
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
                    url: "fe_notes.js"
                    // url:"ih/ui/email/email.js",
                    // evalhtml:true
                });

                tabGroup.activeTab.open(infoWindow, {
                    animated: true
                });
            });

          // emailButton.addEventListener('click',
          // function(e) {
          //     var emailWindow = Ti.UI.createWindow({
          //         backButtonTitle: 'Back',
          //         title: 'Email',
          //         barColor: 'black',
          //         navBarHidden: false,
          //         tabBarHidden: true,
          //
          //         orientationModes: [Ti.UI.PORTRAIT],
          //         //l: "fe_notes.js"
          //         url: "email.js",
          //         evalhtml: true
          //     });

                //	send_email = Ti.UI.createButton({
                //		title:'Send'
                //	});
                //	
                //	emailWindow.rightNavButton = send_email;
                //	
           //     tabGroup.activeTab.open(emailWindow, {
           //         animated: true
           //     });
           // });
           //
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






/* SAVE
* It saves the form.
*/






