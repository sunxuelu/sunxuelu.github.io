var detailsTpl=require("../tpl/details.string");

SPA.defineView('details',{
	html:detailsTpl,
	plugins:['delegated'],
	bindActions:{
		'details.back':function(){
			this.hide();
		}
	}
})