var ih = {};

(function(){
	
	// application-global variables
	ih.app = {};
	
	ih.app.lang = function() {
	//	var lang = Ti.Locale.currentLanguage;
	//	if (/(en|es|id|pt|zh-Hant)/.test(lang)) {
	//		return lang;
		//}
		return 'en';
	};
	
	 
})();

Ti.include(
	'/ih/config/config.js',
	'/ih/ui/ui.js',
	'/test/enabled.js',
	'/test/tests.js'
);