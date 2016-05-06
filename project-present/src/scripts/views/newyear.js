var newyearTpl=require("../tpl/newyear.string");

SPA.defineView('newyear',{
	html:newyearTpl,
	plugins:['delegated'],
	bindActions:{
		'newyear.back':function(){
			this.hide();
		}
	}
})