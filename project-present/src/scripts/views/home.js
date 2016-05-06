require("../lib/swiper-3.3.1.min.js");
var fnutil=require("../util/fn-util.js");
var homeTpl=require("../tpl/home.string");

SPA.defineView('home',{
	html:homeTpl,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.homelist=[];
			vm.zan = [100, 200];
		}
	}],

	init:{
		vm:null,
		myScroll:null,
		handler:"#home"
	},

	bindActions:{
		'home.newyear':function(){
			SPA .show("newyear")
		},
		'tap.details':function(){
			SPA.show("details")
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

			var swiper = new Swiper('#index-swiper', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false,
		        loop:true
    		});
			//初次加载
    		$.ajax({
    			url:"/project-present/data/homelist.json",
    			success:function(res){
    				self.vm.homelist=res.data;

    				setTimeout(function(){
	    				self.myScroll.refresh();
						self.myScroll.scrollBy(0,-35);
	    			},200)
    			},
    			
    		});

    		//上拉下拉
    		fnutil.pullToRefresh({
    			//handler:"#home",
    			//vm:self.vm
    			view:self
    		});
		}
	}
})
