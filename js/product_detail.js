$(function(){

if (!$.support.leadingWhitespace) {
			} else {
    			$(".an").addClass("wow fadeInUp");
   				 wow = new WOW({
       			 nimateClass: 'animated',
       			 offset: 0
    		});
    		wow.init();
		}

$(".cpBtn").hover(function(){
	$(".menubg").hide();
	setTimeout(function(){
		$(".mqNav").hide();
	},150);
},function(){
	$(".mqNav").hide();
	$(".menubg").hide();
});





//������

function scroll(){

	var f2 =$(".qNav").offset().top;

	$(window).scroll(function (){

		var st = $(document).scrollTop();

		if(st > f2){

			$('.qNav').addClass("fixedtop");

			$(".bigimg").css({marginTop:"61px"});

		}else{

			$('.qNav').removeClass("fixedtop");

			$(".bigimg").css({marginTop:"0px"});

		}	

	});

	var o = $('.box');			

	$(window).scroll(function(){

		var top = $(this).scrollTop();var height = $(this).height();

		o.each(function(i){

			if($(this).offset().top - top -200 < height/100){

			$('.qNav li').removeClass('on').eq(i).addClass('on');	

			}else return;

		});

	});

}

scroll();





$('.qNav li').click(function(){

 var num = $(this).index('.qNav li');	

 if(num == 0){

	 $('body,html').animate({scrollTop: ($(".box").eq(num).offset().top)}, 300);

 }else{

	 $('body,html').animate({scrollTop: ($(".box").eq(num).offset().top-100)}, 300);

}

});









//�����л�

$(".tabs span").click(function () {

	var tabs = $(this).parents(".tabs").children("span");

	var panels =$(this).parents(".tabBox").find(".tabMain");

	var index = $.inArray(this, tabs);

	tabs.removeClass("on").eq(index).addClass("on");

	panels.hide().eq(index).show();

});









//ͼƬ�ֲ�
var n = 0;
var numPic = $(".slidebox .fouce p").length;
if(numPic == 1){
	$(".slidebox .tabicon").hide();
	stopPlay();
}else{
	$(".slidebox .tabicon").show();
}

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
//    stopPlay();
//},function() {
//    autoPlay();
//});
autoPlay();





});

