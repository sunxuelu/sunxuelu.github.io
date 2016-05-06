var forgetTpl=require("../tpl/forget.string");

SPA.defineView('forget',{
	html:forgetTpl,
	styles:{
		'border-radius':'0.1rem'
	},
	plugins:['delegated'],
	bindActions:{
		'forget.sure':function(){
			this.hide();
		}
	}

});