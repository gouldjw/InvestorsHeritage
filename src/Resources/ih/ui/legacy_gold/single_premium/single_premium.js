//        //   var a = Titanium.UI.createAlertDialog({
//        //   	title:'Issue Age Not Available',
//        //   	message:'This policy is only avaliable to customers between the age of \n 0 - 80. \n\r If you entered the wrong age by accident, please tap the Cancel button and reenter the correct age. \n\r If your customer is older than 80, please tap the LGSP button to go to the correct policy.',
//        //   	buttonNames: ["Cancel", "LGSP"],
//        //   	
//        //   });
//        //   
//        //   a.show();
//        
// var data = [
// 	{title: 'Name:', hasChild:false, color:'black'},
// 	{title: 'Issue Age:', hasChild:false, color:'black'},
// 	{title: 'Funeral Amount:', hasChild:false, color:'black'},
// 	{title: 'Premium Amount:', hasChild:false, color:'black'},
// 	{title: 'Signed By Insured:', hasChild:false, color:'black'}
// 	
// 
// ];


//Ti.include('main_windows/database.js'); 



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
 
/* Creates the fields of the row//{{{
* IT creates a row as follows:
*  label ----- textfield/label
* 
* name : Text of the label
* type_filed : if the element in the second column it's a label or a textfield
* value: for the element in the second column
*/
function createStandardRow(id, name, type_field, value) {
    type_field = type_field || TEXT_FIELD; // by default
    var row = Ti.UI.createTableViewRow();
    //row.selectedBackgroundColor = '#385292';
    row.height = 48;
    var label_id = Titanium.UI.createLabel({ //store in order to get it later
        text:id,
        visible:false,
        width:'1',
        height:'1'
    });
    row.add(label_id);
    
    var label = Titanium.UI.createLabel({
        text:name,
        textAlign:'center',
        font:{fontSize:16,fontWeight:'bold'},
        left:2,
				color:'black',       
				width:'100',
        height:'auto'
    });
    row.add(label);
    var field;	
	switch (type_field) {
		case TEXT_FIELD:
		    field = Titanium.UI.createTextField({
		        color: '#000',
		        height: 48,
		        left: 120,
		        font: {
		            fontSize: 16,
		            fontWeight: 'bold'
		        },
		        width: 130,
		        value: value,
		        id: id,
		        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
		        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
		        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
		    });

		    //field.addEventListener('blur', checkFocus);
		    break;
		case NUMBER_FIELD:
		    field = Titanium.UI.createTextField({
		        color: '#000',
		        height: 48,
		        left: 120,
		        font: {
		            fontSize: 16,
		            fontWeight: 'bold'
		        },
		        width: 130,
		        value: value,
		        id: id,
		        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
		        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
		        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
		    });
		    //field.addEventListener('blur', checkFocus);
		    break;
		case PICKER_FIELD:
		    field = Titanium.UI.createTextField({
		        color: '#000',
		        height: 48,
		        left: 120,
		        font: {
		            fontSize: 16,
		            fontWeight: 'bold'
		        },
		        width: 130,
		        value: value,
		        id: id,
		        keyboardType: PICKER_TYPE_PLAIN,
		        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
		        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
		    });



		    //field.addEventListener('blur', checkFocus);
		    break;
		case TEXTAREA_FIELD:
		    field = Titanium.UI.createTextArea({
		        color: '#000',
		        height: 145,
		        left: 110,
		        width: 150,
		        value: value,
		        id: id,
		        font: {
		            fontSize: 16,
		            fontWeight: 'bold'
		        },
		        textAlign: 'left',
		        appearance: Titanium.UI.KEYBOARD_DEFAULT,
		        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
		        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
		        borderWidth: 2,
		        borderColor: '#bbb',
		        borderRadius: 5,
		        suppressReturn: false
		    });
		    row.height = 155;
		    //field.addEventListener('blur', checkFocus);
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
									
                top:0, left:0, bottom:0, right:0,backgroundImage:'../../images/bg.png',
								style: Titanium.UI.iPhone.TableViewStyle.GROUPED});                                      

    var row = createStandardRow('name', 'Name', TEXT_FIELD, "");
    //row.header="";
    //row.children[2].borderColor = 'red';
   // fieldNonValidated.push(row.children[2]);
    data.push(row);

    row = createStandardRow('issue_age', 'Issue Age', TEXT_FIELD, "");
   // row.children[2].borderColor = 'red';
   // fieldNonValidated.push(row.children[2]);
    data.push(row);

		 row = createStandardRow('funeral_amount', 'Funeral Amount', NUMBER_FIELD, "");
	   // row.children[2].borderColor = 'red';
	   // fieldNonValidated.push(row.children[2]);
	    data.push(row);
			
			row = createStandardRow('premium_amount', 'Premium Amount', TEXT_FIELD, "");
	   // row.children[2].borderColor = 'red';
	   // fieldNonValidated.push(row.children[2]);
	    data.push(row);
			
			row = createStandardRow('signed_by_insured', 'Signed By Insured', TEXT_FIELD, "");
	   // row.children[2].borderColor = 'red';
	   // fieldNonValidated.push(row.children[2]);
	    data.push(row);

    
    row = Ti.UI.createTableViewRow({height:210}); 
    
   	var calculate = Ti.UI.createButton({ 
			//title: "Legacy Gold Preneed Rate Calculator",
			width:280,
			height:52,
			backgroundImage: '/images/calculate.png',
			//backgroundLeftCap: 10,
    });
		
		calculate.addEventListener('click',function(e) {
			
			var calculation ='this tfa is not doing the calculations, but it will soon on the next one';
			alert(calculation);
		});

		//Ti.UI.currentWindow.add(calculate);
		
	
    row = Ti.UI.createTableViewRow();
    row.add(calculate);
    data.push(row);
    tableview.setData(data);
    Ti.UI.currentWindow.add(tableview);
		//Ti.UI.currentWindow.add(calculate);
    

/* SAVE
* It saves the form.
*/   

