//alert(Ti.App.Properties.getString('lgm_plan'));

if(Ti.App.Properties.getString('plan') == 'Simplified Issue'){
		Ti.include('lgm_plan_simple.js');
}else{
		Ti.include('lgm_plan_guaranteed.js');
}

