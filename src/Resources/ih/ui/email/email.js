var win = Ti.UI.currentWindow;
 
		var emailDialog = Titanium.UI.createEmailDialog();
	   if (!emailDialog.isSupported()) {
	   Ti.UI.createAlertDialog({
	   	title:'Error',
	   	message:'Email not available' }).show();
	  }
		emailDialog.setSubject('Your Insurance Quote From IHLIC!');
		emailDialog.setToRecipients(['']);
		//emailDialog.setCcRecipients(['bar@yahoo.com']);
		emailDialog.setBccRecipients(['compliance@IHLIC.example.com']);
		
		if (Ti.Platform.name == 'iPhone OS') {
			//emailDialog.setMessageBody('<b>Thank You for your business!</b>å');
			emailDialog.setHtml(true);
			emailDialog.setBarColor('#000000');
		} else {
			//emailDialog.setMessageBody('Thank You for your business!');
		}

		// attach a blob
		//emailDialog.addAttachment(event.media);
		
		// attach a file
		var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'IHLIC_Modal_Premium.pdf');
		emailDialog.addAttachment(f);
		
		emailDialog.addEventListener('complete',function(e)
		{
			if (e.result == emailDialog.SENT)
			{
				if (Ti.Platform.osname != 'android') {
					// android doesn't give us useful result codes.
					// it anyway shows a toast.
					alert("message was sent");
					
				}
			}
			else
			{
				alert("message was not sent. Please exit this screen by pressing the back button");
			}
		});
		emailDialog.open();
	 
//});

