// needs to pass in the arguments _recipents and _message
var emailDialog = Ti.UI.createEmailDialog()
emailDialog.subject = "Your Insurance Quote";
emailDialog.toRecipients = [_recipients];
emailDialog.messageBody = _message;
var f = Ti.Filesystem.getFile('report.pdf');
emailDialog.addAttachment(f);
emailDialog.open();