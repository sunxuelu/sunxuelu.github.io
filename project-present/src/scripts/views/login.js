var loginTpl=require("../tpl/login.string");

SPA.defineView('login',{
	html:loginTpl,

	plugins:['delegated'],

	bindActions:{
		'login.error':function(){
			this.hide();
		},
		'login.open':function(){
			SPA.show("signin");
		}
	}
})