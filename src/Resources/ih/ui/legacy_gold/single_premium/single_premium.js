//        //   var a = Titanium.UI.createAlertDialog({
//        //   	title:'Issue Age Not Available',
//        //   	message:'This policy is only avaliable to customers between the age of \n 0 - 80. \n\r If you entered the wrong age by accident, please tap the Cancel button and reenter the correct age. \n\r If your customer is older than 80, please tap the LGSP button to go to the correct policy.',
//        //   	buttonNames: ["Cancel", "LGSP"],
//        //   	
//        //   });
//        //   
//        //   a.show();
//        
 var data = [
 	{title: 'Name:', hasChild:false, color:'black'},
 	{title: 'Issue Age:', hasChild:false, color:'black'},
 	{title: 'Funeral Amount:', hasChild:false, color:'black'},
 	{title: 'Premium Amount:', hasChild:false, color:'black'},
 	{title: 'Signed By Insured:', hasChild:false, color:'black'}
 	
 
 ];
//        
//        // create table view
   var tableview = Titanium.UI.createTableView({
   	style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
		backgroundImage:'../../images/bg.png',
   	data:data
   });


				var calculate_btn = Ti.UI.createButton({ 
					title: "Calculate",
					width:280,
					height:45,
					bottom:33
					});
//        
//        function showClickEventInfo(e, islongclick) {
//        	// event data
//        	var index = e.index;
//        	var section = e.section;
//        	var row = e.row;
//        	var rowdata = e.rowData;
//        	Ti.API.info('detail ' + e.detail);
//        	var msg = 'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata;
//        	if (islongclick) {
//        		msg = "LONGCLICK " + msg;
//        	}
//        //	Titanium.UI.createAlertDialog({title:'Table View',message:msg}).show();
//        }
//        
//        // create table view event listener
//        tableview.addEventListener('click', function(e)
//        {
//        	showClickEventInfo(e);
//        });
//        tableview.addEventListener('longclick', function(e)
//        {
//        	showClickEventInfo(e, true);
//        });
//        
//        // add table view to the window
       Titanium.UI.currentWindow.add(tableview);
			Titanium.UI.currentWindow.add(calculate_btn);
//        

//     
  //   var win = Ti.UI.currentWindow;
//     
//     function addRow(addTextArea)
//     {
//     	var row = Ti.UI.createTableViewRow({height:50});
//     	var tf1 = null;
//     	if (addTextArea)
//     	{
//     		tf1 = Titanium.UI.createTextArea({
//     			color:'#336699',
//     			width:250
//     		});
//     
//     	}
//     	else
//     	{
//     		tf1 = Titanium.UI.createTextField({
//     			color:'#336699',
//     			height:35,
//     			top:10,
//     			left:10,
//     			width:250,
//     			hintText:'hint',
//     			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
//     		});
//     
//     	}
//     	row.add(tf1);
//     	row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
//     	row.className = 'control';
//     	return row;
//     }
//     
//     // create table view data object
//     var data = [];
//     
//     for (var x=0;x<10;x++)
//     {
//     	if (x==9){
//     		data[x] = addRow(true);
//     	} else {
//     		data[x] = addRow();
//     	}
//     
//     }
//     
//     var tableView = Ti.UI.createTableView({
//     	data:data,
//     	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
//     });
//     win.addEventListener('focus', function()
//     {
//     	Ti.API.info('window focus fired');
//     });
//     win.add(tableView);




