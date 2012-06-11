//need to query the fi  db for rate per 1k
//value here

if(Ti.App.Properties.getString('type') == 'Funeral Amount'){
		Ti.include('lspr_funeral_amount.js');
}
if(Ti.App.Properties.getString('type') == 'Premium Amount'){
		Ti.include('face_amount.js');
}

//  Legacy Gold Single Premium
//  1.	Tap LGPR button
//  2.	Choose Single Premium Pay
//  3.	Fill out the requested information: (the app must store this in memory)
//  a.	Name:  (Aa-Zz)
//  b.	Issue Age:  (0-50, 51-60, 61-65, 66-70, 71-75, 76-80, 81-85, 86-100)
//  c.	Funeral Amount:  ($500-25,000)	OR
//  d.	Premium Amount:  ($500-25,000)
//  e.	Signed By Insured:  (Yes/No)
//  4.	Tap the Calculate button
//  a.	To determine the Rate, the app will need to:
//  i.	Take the previously entered Issue Age & Signed By Insured; & then query the Final Expense II Database to determine the exact Rate per 1000.  
//  1.	The Database is complete with every possible scenario, so the app just needs to match up the correct data fields from above.
//  ii.	Store the Rate per 1000 in memory as “ratePer1000”
//  iii.	Then, the app needs to look at the previously entered data fields and determine if the client entered a Funeral Amount or Premium Amount.
//  1.	If Funeral Amount:
//  a.	Then, divide the entered Funeral Amount by 1000 and store the answer in memory as “SP_fAmDiv1000”
//  b.	Then, multiply “SP_fAmDiv1000” by the “ratePer1000” to find the Single Premium Due.
//  2.	If Premium Amount:
//  a.	Then, divide the “ratePer1000” by 1000 to receive a decimal.  Store this answer in memory as “ratePer1000Div1000.”
//  b.	Then, divide the previously entered Premium Amount by the “ratePer1000Div1000” to find the Policy Face Amount.
//  3.	These two equations are the same thing, one just shows the client how much they owe the Insurance company (Funeral Amount), and the other shows how big their policy will be/how much coverage they will have (Premium Amount).
//  
//  b.	VARIATIONS to the RULES:
//  i.	If Signed By Insured is equal to Yes, then proceed with the above explanation.
//  ii.	If Signed By Insured is equal to No, then do not query the database and automatically use 999 as the “Rate per 1000.”
