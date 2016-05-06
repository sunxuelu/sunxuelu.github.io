var myTpl=require("../tpl/my.string");

var _=SPA.util;

SPA.defineView("my",{
	html:myTpl,

	plugins:["delegated"],

	init:{
		mySwiper:null
	},

	bindActions:{
		'my.switch':function(e,data){
			$(e.el).addClass("active").siblings().removeClass("active");
			this.mySwiper.slideTo($(e.el).index());
		},
		'tap.set':function(){
			SPA.show("set");
		},
		'my.signin':function(e,data){
			if(_.storage('isLogin')){
				SPA.show("exit",{
					ani:{
						name:'dialog',
						width:180,
						height:100
					}
				});

			}else{
				SPA.show("login")
			}
		}
		
	},	

	bindEvents:{
		'beforeShow':function(){
			var self=this;
			self.mySwiper = new Swiper ('#my-content', {
			    loop: false,
			    onSlideChangeStart:function(){
			    	$("#like li").eq(self.mySwiper.activeIndex)
			    	.addClass("active").siblings().removeClass("active");
			    }
			});
		}
	}

})