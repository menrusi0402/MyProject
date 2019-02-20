 (function($){
        $(window).load(function(){
            $(".liucheng").mCustomScrollbar({
					horizontalScroll:true,

					scrollInertia:600,

					autoDraggerLength:false

				});
        });
    })(jQuery);

$(function(){



//滚动悬浮

function scroll(){

	var f2 =$(".path").offset().top;

	$(window).scroll(function (){

		var st = $(document).scrollTop();

		if(st > f2){

			$('.float').addClass("fixedtop");

			$(".b1").css({marginTop:"56px"});

		}else{

			$('.float').removeClass("fixedtop");

			$(".b1").css({marginTop:"0px"});

		}	

	});

	var o = $('.box');			

	$(window).scroll(function(){

		var top = $(this).scrollTop();var height = $(this).height();

		o.each(function(i){

			if($(this).offset().top - top -200 < height/100){

			$('.nav span').removeClass('on').eq(i).addClass('on');	

			}else return;

		});

	});

}

scroll();



$('.nav span').click(function(){

 var num = $(this).index('.nav span');	

 if(num == 0){

	 $('body,html').animate({scrollTop: ($(".box").eq(num).offset().top)}, 300);

 }else{

	 $('body,html').animate({scrollTop: ($(".box").eq(num).offset().top)}, 300);

}

});





//加盟流程效果

var page= 1; 

var i = 1;

$(".prev").hide();

//向右滚动 

$(".next").click(function(){ //点击事件 

var v_wrap = $(this).parents(".scroll"); 

var v_show = v_wrap.find(".scroll_list");

var v_cont = v_wrap.find(".boxs");

var v_width = 237; 

var len = v_show.find("li").length; 

var page_count = Math.ceil(6); 

if(!v_show.is(":animated")){ 

if(page == page_count){ 

v_show.animate({left:'-='+v_width},"slow"); 

$(".next").hide();

}else{ 

v_show.animate({left:'-='+v_width},"slow"); 

$(".prev").show();

page++; 

} 

} 

}); 

//向左滚动 

$(".prev").click(function(){

var v_wrap = $(this).parents(".scroll");

var v_show = v_wrap.find(".scroll_list"); 

var v_cont = v_wrap.find(".boxs"); 

var v_width = 237; 

var len = v_show.find("li").length; 

var page_count = Math.ceil(6);  

if(!v_show.is(":animated")){ 

if(page == 1){ 

v_show.animate({left:'+='+ v_width},"slow"); 

$(".prev").hide();

}else{ 

v_show.animate({left:'+='+ v_width},"slow"); 

page--; 

$(".next").show();

} 

} 

}); 





//图片轮播

var n = 0;

var numPic = $(".fouce p").length;

$(".slidebox .fouce p").eq(0).addClass("active");

$(".slidebox li").eq(0).addClass("active");

function bgimg() {

    if (n < numPic-1) {

        n++;

    } else {

        n = 0;

    }

    $(".fouce p").removeClass("active").eq(n - 1).addClass("last-active");

    $(".fouce p").eq(n).css({opacity: 0.0}).addClass("active").animate({opacity: 1.0},1000,

    function() {

        $(".fouce p").removeClass("last-active");

    });

    $(".slidebox li").removeClass("active").eq(n).addClass("active");

}



$(".slidebox li").click(function() {

    var tabs = $(this).parents(".slidebox").find("li");

    var nu = $.inArray(this, tabs);

	tabs.removeClass("active").eq(nu).addClass("active");

	

	$(".fouce p").removeClass("active");

    $(".fouce p").eq(n).addClass("last-active");

    $(".fouce p").eq(nu).css({

        opacity: 0.0

    }).addClass("active").animate({

        opacity: 1.0

    },

    1000,

    function() {

        $(".fouce p").removeClass("last-active");

    });

    n = nu;



});

var autoPlay = function() {

    t = setInterval(bgimg, 6000);

}

var stopPlay = function() {

    window.clearInterval(t);

}

//$(".slidebox").hover(function() {
//
//    stopPlay();
//
//},function() {
//
//    autoPlay();
//
//});

autoPlay();


if (!$.support.leadingWhitespace) {
			} else {
    			$(".an").addClass("wow fadeInUp");
   				 wow = new WOW({
       			 nimateClass: 'animated',
       			 offset: 0
    		});
    		wow.init();
		}




});

