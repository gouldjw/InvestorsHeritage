 var a = Titanium.UI.createAlertDialog({
	title:'Simplified Issue Reminder',
	message:'All health questions must be answered No. \n\r If any questions are answered Yes, please tap the cancel button and choose Guaranteed Issue.',
	buttonNames: ["Cancel", "OK"],

});
a.addEventListener('click',function(e) {
	field.blur();

	

});

a.show();