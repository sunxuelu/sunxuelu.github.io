var _fnUtil={

	dataFormat:function(arr){
			var newArr = [];
			for(var i=0;i<Math.ceil(arr.length/2);i++){
				newArr[i]=[];
				newArr[i].push(arr[i*2]);
				newArr[i].push(arr[i*2+1]);
			}
			return newArr;
		},

	pullToRefresh:function(opts){
			//上拉下拉
			var that=this;
			var ptrHeight=opts.ptrHeight||35;
			var vm=opts.view.vm||{};
			var myScroll=opts.view.myScroll||{};

		    
		    var $objScroll=$(opts.view.handler);
		    myScroll.scrollBy(0, -ptrHeight);

		    var head = $objScroll.find('.head img'),
		        topImgHasClass = head.hasClass('up');
		    var foot = $objScroll.find('.foot img'),
		        bottomImgHasClass = head.hasClass('down');
		    myScroll.on('scroll', function () {
		        var y = this.y,
		            maxY = this.maxScrollY - y;
		        if (y >= 0) {
		            !topImgHasClass && head.addClass('up');
		            return '';
		        }
		        if (maxY >= 0) {
		            !bottomImgHasClass && foot.addClass('down');
		            return '';
		        }
		    });

		    myScroll.on('scrollEnd', function () {
		        if (this.y >= -ptrHeight && this.y < 0) {
		            myScroll.scrollTo(0, -ptrHeight);
		            head.removeClass('up');
		        } else if (this.y >= 0) {
		            head.attr('src', '/project-present/images/img/ajax-loader.gif');
		            //TODO ajax下拉刷新数据

		            setTimeout(function () {
		                myScroll.scrollTo(0, -ptrHeight);
		                head.removeClass('up');
		                head.attr('src', '/project-present/images/img/arrow.png');
		            }, 1000);
		        }

		        var maxY = this.maxScrollY - this.y;
		        if (maxY > -ptrHeight && maxY < 0) {
		            var self = this;
		            myScroll.scrollTo(0, self.maxScrollY + ptrHeight);
		            foot.removeClass('down')
		        } else if (maxY >= 0) {
		        	var self = this;
		            foot.attr('src', '/project-present/images/img/arrow.png');
		            //TODO ajax上拉加载数据
		            if(opts.view.handler=="#home"){
		            	$.ajax({
			            	url:"/project-present/data/homelist.json",
			            	success:function(res){
			            		//console.log(data);

			            		//将数据加载进来
			            		vm.homelist.pushArray(res.data); 
			            		myScroll.refresh();

			                	myScroll.scrollTo(0, self.y + ptrHeight);
			                	foot.removeClass('down');
			                	foot.attr('src', '/project-present/images/img/ajax-loader.gif');
			            	}
		            	})
		            }else if(opts.view.handler=="#good"){
		            	 $.ajax({
			            	url:"/project-present/data/goodlist.json",
			            	success:function(goodres){

			            		vm.origingoodlist.pushArray(goodres.data);
			            		vm.goodlist=that.dataFormat(vm.origingoodlist);
			            		myScroll.refresh();

			                	myScroll.scrollTo(0, self.y + ptrHeight);
			                	foot.removeClass('down');
			                	foot.attr('src', '/project-present/images/img/ajax-loader.gif');
			            	}
			            })
		            }
		            

		      
		            // var self = this;
		            // setTimeout(function () {
		      
		            //     myScroll.refresh();

		            //     myScroll.scrollTo(0, self.y + ptrHeight);
		            //     foot.removeClass('down');
		            //     foot.attr('src', '/project-present/images/img/arrow.png');
		            // }, 1000);
		        }
		    });
	}
}

module.exports=_fnUtil;
