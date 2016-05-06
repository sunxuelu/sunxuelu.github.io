var welcomeTPl=require("../tpl/welcome.string");

SPA.defineView("welcome",{
	html:welcomeTPl,

	bindEvents:{
		"beforeShow":function(){
			setTimeout(function(){
				SPA.open("guide");
			},2000);
		}
	}
})