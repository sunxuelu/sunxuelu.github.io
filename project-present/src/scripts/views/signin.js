var signinTpl=require("../tpl/signin.string");

var _=SPA.util;

SPA.defineView('signin',{
	html:signinTpl,

	plugins:['delegated'],

	bindActions:{
		'tap.back':function(){
			this.hide();
		},
		'tap.register':function(){
			SPA.show("register");
		},
		'tap.forget':function(){
			SPA.show("forget",{
				ani:{
					name:'dialog',
					width:260,
					height:130
				}
			})
		},
		'tap.signin':function(e,data){
			_.storage("isLogin",true);	
		}

	},

	bindEvents:{
		'beforeShow':function(){

		}
	}
})