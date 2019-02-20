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



function wrap(){

	var height =$(window).height();

	var width =$(window).width();	

	var fixdRight = (width -1170)/2-64;

	$(".fixd").css({right:fixdRight});

}

wrap();

$(window).resize(function(){

	wrap();					  

});



//$(".cpBtn").hover(function(){
//	$(".menubg").hide();
//	setTimeout(function(){
//		$(".mqNav").hide();
//	},150);
//},function(){
//	$(".mqNav").hide();
//	$(".menubg").hide();
//});





//������

function scroll(){

	//var f2 =$(".nav").offset().top;
//
//	$(window).scroll(function (){
//
//		var st = $(document).scrollTop();
//
//		if(st > f2){
//
//			$('.qNav').addClass("fixedtop");
//
//			$(".box").eq(0).css({marginTop:"70px"});
//
//		}else{
//
//			$('.qNav').removeClass("fixedtop");
//
//			$(".box").eq(0).css({marginTop:"0px"});
//
//		}	
//
//	});

	var o = $('.box');			

	$(window).scroll(function(){

		var top = $(this).scrollTop();var height = $(this).height();

		o.each(function(i){

			if($(this).offset().top - top -80 < height/100){

			$('.fixd li').removeClass('on').eq(i).addClass('on');	

			}else return;

		});

	});

}

scroll();



$('.fixd li').click(function(){

 var num = $(this).index('.fixd li');	

 if(num == 0){

	 $('body,html').animate({scrollTop: ($(".box").eq(num).offset().top)}, 300);

 }else{

	 $('body,html').animate({scrollTop: ($(".box").eq(num).offset().top-80)}, 300);

}

});



//���ض���

$('.top').click(function(){

$('body,html').animate({scrollTop: 0}, 300);

setTimeout(function() {

	$('.fixd li').removeClass('on').eq(0).addClass('on');

}, 300);



});





});

