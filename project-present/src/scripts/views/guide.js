require("../lib/swiper-3.3.1.min.js");
var guideTpl=require("../tpl/guide.string");


SPA.defineView('guide',{
	html:guideTpl,

	plugins:['delegated'],

	bindActions:{
		'goto-index':function(){
			SPA.open("index");
		}
	},

	bindEvents:{
		'beforeShow':function(){
			var mySwiper=new Swiper("#guide-swiper",{
				loop:false,
				pagination: '.swiper-pagination',
			});
		}
	}
})
