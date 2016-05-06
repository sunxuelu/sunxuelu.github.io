var registerTpl=require("../tpl/register.string");

SPA.defineView('register',{
	html:registerTpl,

	plugins:['delegated'],

	bindActions:{
		'register.back':function(){
			this.hide();
		}
	}
})