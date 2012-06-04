if(Ti.App.Properties.getString('lspr_funeral_amount') != null){
		Ti.include('lspr_funeral_amount.js');
}else{
		Ti.include('face_amount.js');
}

