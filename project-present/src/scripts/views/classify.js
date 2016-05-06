var classifyTpl=require("../tpl/classify.string");
var fnutil=require("../util/fn-util.js");

SPA.defineView("classify",{
	html:classifyTpl,

	plugins:['delegated',{
		name:"avalon",
		options:function(vm){
			vm.classifylist1=[];
			vm.classifylist2=[];
		}
	}],
	init:{
		vm:null
	},

	bindEvents:{
		'beforeShow':function(){
			var self=this;
			self.vm=self.getVM();
			$.ajax({
				url:"/project-present/data/classify.json",
				success:function(classifyRes){
					if(classifyRes.ret){
						self.vm.classifylist1=fnutil.dataFormat(classifyRes.data);

					}
				}
			});
			$.ajax({
				url:"/project-present/data/classify1.json",
				success:function(classifyRes){
					if(classifyRes.ret){
						self.vm.classifylist2=fnutil.dataFormat(classifyRes.data);

					}
				}
			});
		}
	}
})