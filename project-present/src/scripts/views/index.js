var indexTpl=require("../tpl/index.string");

SPA.defineView('index',{
	html:indexTpl,

	modules:[{
		name:'indexContent',
		container:'.l-index-content',
		views:['home','good','classify','my','login',"signin"],
		defaultTag:'home'
	}],

	plugins:['delegated'],

	bindActions:{
		'tap-switch':function(e,data){
			this.modules.indexContent.launch(data.tag);
			$(e.el).addClass('active').siblings().removeClass("active");
		}
	}
	
	// bind
})
