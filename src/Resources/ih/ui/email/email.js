<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<title>local webview</title>
	<link rel="stylesheet" type="text/css" href="../test.css" />
	<script type="text/javascript" src="../jquery-1.3.2.js"></script>
	<meta name="format-detection" content="telephone=no"/>
</head>
<body id="mybody" style="height:500px;background-color:#999;background-image:url(../images/bg.png)">
	
	Hello from local webview. You should see an indicator in the middle and my text should be blue.
	We are also including JQuery
	<div id="foo" style="margin-top:20px;font-weight:bold">hello </div>
	<div>323-223-2222</div>
	<img alt="an image" src="" id="image"/>
	<a href="http://www.google.com">google</a>
	<script>

		Titanium.API.info('before image');
		Titanium.API.info("JSON injection: "+JSON.stringify(['foo','bar']));
		var i = new Image();
		Titanium.API.info('image '  + i);
		window.my_global_variable = 10;
		Ti.App.addEventListener('image', function(d)
		{
			var path = d.path;
			Ti.API.info('RECEIVED PATH ' + path)
			document.getElementById('image').src = path;
		})
		Ti.App.addEventListener('show_indicator',function(e)
		{
			Ti.API.info("removeEventListener: a="+e.a);
			Ti.App.removeEventListener('show_indicator',this);
			setTimeout(function()
			{
				Ti.App.fireEvent('hide_indicator');
			},1000);
		});
		Ti.App.fireEvent('show_indicator',{'a':1});
		Ti.API.debug('log statement here');
		$('#foo').html("Click Me to Hide the Toolbar");
		
		// you can use either onclick or ontouchstart - if you use onclick
		// and have a click on the webview instance you'll need to hold down the
		// webview area for a 1/2 second to trigger it ... ontouchstart is immediate
		// both work but ontouchstart makes it appear immediate and don't make you think the 
		// test isn't working
		document.getElementById("foo").ontouchstart = function()
		{
			Ti.App.fireEvent('webview_hidetoolbar',{foo:'bar'});
			Ti.API.info("clicked on local_webview link");
		};
		
		
	</script>

	
</body>
</html>

