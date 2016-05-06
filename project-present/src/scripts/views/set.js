var setTpl=require("../tpl/set.string");

SPA.defineView("set",{
	html:setTpl,

	plugins:['delegated'],

	bindActions:{
		"set.back":function(){
			this.hide();
		},
		'set.share':function(){
			SPA.show('share',{
				ani:{
					name:'actionSheet',
					distance:252
				}
			})
		}
	}
})