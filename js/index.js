$(function(){

if (!$.support.leadingWhitespace) {
			$(".video").hide();
		$(".videoPic").show();
			
			} else {
    			$(".an").addClass("wow fadeInUp");
   				 wow = new WOW({
       			 nimateClass: 'animated',
       			 offset: 0
    		});
    		wow.init();
			
		$(".video").show();
		$(".videoPic").hide();
}

		
function wrap2(){	
	var height =$(window).height();
	if(height < 740){
		//$("body").addClass("smallPage");
		$(".slidebox").css({marginTop:height-740});
		var mt = (740-height)/2 - 90;
		$(".slidebox .wrap .txt").css({marginTop:mt});
	}else{
		$(".slidebox").css({top:0});
	}
}
wrap2();
$(window).resize(function(){
	wrap2();					  
});

//������
function scroll(){
	var f2 =$(".listMain").offset().top;
	$(window).scroll(function (){
		var st = $(document).scrollTop();
		if(st > f2){
			$('.fixd').show();
		}else{
			$('.fixd').hide();
		}	
	});
}
scroll();

var group_banner_page = 2;
$('#group_banner_more').click(function(){
    var $this = $(this);
    $this.text('加载中...');
    $this.attr('disabled','disabled');
    $.post('/Index/ajax_group_banner.html', {p:group_banner_page}, function(result){
        var data = result.info;
        if (data.count < 4) {
            //$this.text('没有了');
			$(".listBox .more").hide();
        } else if (data.count == 4) {
            $this.text('加载更多');
            $this.removeAttr('disabled');
        }
        group_banner_page++;
        $('#main_group_banner').append(data.html);
		$(".an").addClass("wow fadeInUp");
   				 wow = new WOW({
       			 nimateClass: 'animated',
       			 offset: 0
    		});
    });
});



});
//logo图片
function change(){
			//获取图片
			var element=document.getElementById('kkimage');
			//判断，src属性里面是否有指定内容
			if(element.src.match("images/logo-red.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element.src="images/logo-black.png";
			}else{
				element.src="images/logo-red.png";
			}
			
		}
function changes(){
			//获取图片
			var element=document.getElementById('kkimage');
			//判断，src属性里面是否有指定内容
			if(element.src.match("images/logo-black.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element.src="images/logo-red.png";
			}else{
				element.src="images/logo-black.png";
			}
			
		}
//logo结束


//商品图
function change2(){
			var element2=document.getElementById('kkimage2');
			if(element2.src.match("images/style11.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element2.src="images/style1.png";
			}else{
				element2.src="images/style11.png";
			}
		}
function changes2(){
			var element2=document.getElementById('kkimage2');
			if(element2.src.match("images/style1.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element2.src="images/style11png";
			}else{
				element2.src="images/style1.png";
			}
		}

function change3(){
			var element3=document.getElementById('kkimage3');
			if(element3.src.match("images/style22.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element3.src="images/style2.png";
			}else{
				element3.src="images/style22.png";
			}
		}
function changes3(){
			var element3=document.getElementById('kkimage3');
			if(element3.src.match("images/style2.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element3.src="images/style22.png";
			}else{
				element3.src="images/style2.png";
			}
		}		
function change4(){
			var element4=document.getElementById('kkimage4');
			if(element4.src.match("images/style33.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element4.src="images/style3.png";
			}else{
				element4.src="images/style33.png";
			}
		}
function changes4(){
			var element4=document.getElementById('kkimage4');
			if(element4.src.match("images/style3.png")){
				//如果src属性中出现2.gif字符串，那么就把src里面的属性值替换成1.gif
				element4.src="images/style33png";
			}else{
				element4.src="images/style3.png";
			}
		}