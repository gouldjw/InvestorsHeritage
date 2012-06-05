//this file does noething current

//will account for sqlite db
//var ih.ui.util={};

function createStandardRow(id, name, type_field, value) {
    type_field = type_field || TEXT_FIELD; // by default
    var row = Ti.UI.createTableViewRow();
    //row.selectedBackgroundColor = '#385292';
    row.height = 65;
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
        color:'#336699',
        width:'100',
        height:'auto'
    });
    row.add(label);
    var field;
    switch (type_field) {
        case TEXT_FIELD:
            field = Titanium.UI.createTextField({
                color:'#000',
                height:45,
                left:110,
                font:{fontSize:16,fontWeight:'bold'},
                width:150,
                value:value,
                id:id,
                keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
                returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
                borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
            });

            field.addEventListener('blur', checkFocus);
            break;
        case TEXTAREA_FIELD:
            field = Titanium.UI.createTextArea({
                color:'#000',
                height:145,
                left:110,
                width:150,
                value:value,
                id:id,
                font:{fontSize:16, fontWeight:'bold'},  
                textAlign:'left',
                appearance:Titanium.UI.KEYBOARD_DEFAULT,	
                keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
                returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
                borderWidth:2,
                borderColor:'#bbb',
                borderRadius:5,
                suppressReturn:false
            });
            row.height = 155;
            field.addEventListener('blur', checkFocus);
            break;
               
    };    
    row.add(field);
    return row;
}