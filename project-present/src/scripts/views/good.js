var goodTpl=require("../tpl/good.string");
var fnutil=require("../util/fn-util.js");

SPA.defineView("good",{
	html:goodTpl,
	init:{
		vm:null,
		myScroll:null,
		handler:"#good"	
	},

	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.goodlist=[],
			vm.origingoodlist=[]
		}
	}],
	bindActions:{
		'tap.product':function(){
			SPA.show('product-details');
		}
	},

	bindEvents:{
		'beforeShow':function(){
			var self=this;
			self.vm=self.getVM();

			self.myScroll = new IScroll(self.handler, {
		        probeType: 3,
		        mouseWheel: true
		    });

			$.ajax({
				url:"/project-present/data/goodlist.json",
				success: function(goodres){
					self.vm.goodlist=fnutil.dataFormat(goodres.data);
					self.vm.origingoodlist=goodres.data;
					setTimeout(function(){
	    				self.myScroll.refresh();
						self.myScroll.scrollBy(0,-35);
	    			},200)
				}
			});

			//上拉下拉
			fnutil.pullToRefresh({
				view:self
			});
		}
	}
})