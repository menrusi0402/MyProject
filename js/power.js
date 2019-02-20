$(function(){




window.onload=function(){
	$('body,html').animate({scrollTop:0},600);
	setTimeout(function(){
		$(".loading").fadeOut(1000);
		setTimeout(function(){
			b1In();
			$("body").removeClass("hidden");
			scrollbox();
		},800);
	},800);
}




//置顶层	
function scrollbox(){
	var h1 = $('.tm1').outerHeight();
	var h2 = $('.tm2').outerHeight();
	var h3 = $('.tm3').outerHeight();
	var h4 = $('.tm4').outerHeight();
	var h5 = $('.tm5').outerHeight();
	var h6 = $('.tm6').outerHeight();
	var h = $(window).height();
	var ah1 = h*0.2;
	var ah2 = h1-h*0.4;
	var ah3 = h1+h2-h*0.4;
	var ah4 = h1+h2+h3-h*0.4;
	var ah5 = h1+h2+h3+h4-h*0.4;
	var ah6 = h1+h2+h3+h4+h5-h*0.4;
	
	$(window).scroll(function() {
		if ($(window).scrollTop() < ah2){
			b1In()
		}
		
		if ($(window).scrollTop() > ah2){
			b2In()
		}	
		if ($(window).scrollTop() > ah3){
			b3In()
		}	
		if ($(window).scrollTop() > ah4){
			b4In()
		}
		if ($(window).scrollTop() > ah5){
			b5In()
		}
		if ($(window).scrollTop() > ah6){
			b6In()
		}
		
	
		
	});
	
$(".floatNav .tab li").click(function () {
	var tabs = $(this).parents(".tab").find("li");
	var index = $.inArray(this, tabs);
	tabs.removeClass("on").eq(index).addClass("on");
	if(index==0){
		$('body,html').animate({scrollTop:0},600);
	}else if(index==1){
		$('body,html').animate({scrollTop:h1+100},600);
	}else if(index==2){
		$('body,html').animate({scrollTop:h1+h2},600);
	}else if(index==3){
		$('body,html').animate({scrollTop:h1+h2+h3},600);
	}else if(index==4){
		$('body,html').animate({scrollTop:h1+h2+h3+h4},600);
	}else if(index==5){
		$('body,html').animate({scrollTop:h1+h2+h3+h4+h5},600);
	}
});
	
	
	
}


	$(window).scroll(function (){
		var st = $(document).scrollTop();
		if(st > 60){
			$('.qNav').addClass("fixedtop");
			$(".main").css({marginTop:"61px"});
		}else{
			$('.qNav').removeClass("fixedtop");
			$(".main").css({marginTop:"0px"});
		}	
	});						  








function b1In(){
	$(".floatNav .tab li").removeClass("on").eq(0).addClass("on");
	$(".tm1").addClass("d1_dh");
	setTimeout(function(){
		$(".b1 .txt,.b1 .z5").animate({opacity:1},500);		
		$(".tm1").addClass("d1_dh2");
		setTimeout(function(){
					
		},300);
	},300);
}

function b2In(){
	$(".floatNav .tab li").removeClass("on").eq(1).addClass("on");
	$(".tm2 .box .z1").animate({opacity:1},500);			
	$(".tm2").addClass("d2_dh");
	setTimeout(function(){
		$(".tm2").addClass("d2_dh2");
		setTimeout(function(){
			$(".tm2 .box .z5").animate({opacity:1},1200);	
			setTimeout(function(){
				$(".tm2 .box .z3,.b2 .txt2").animate({opacity:1},800);	
				setTimeout(function(){
					$(".tm2 .box .z3 img").css({opacity:0});	
					$(".tm2 .box .z3 img").eq(1).css({opacity:1});
				},1200);
			},300);
		},300);
	},300);
}

function b3In(){
	$(".floatNav .tab li").removeClass("on").eq(2).addClass("on");
	$(".tm3 .box .z2").animate({opacity:1},1200);			
	$(".tm3").addClass("d3_dh");
	setTimeout(function(){
		$(".b3 .txt1").animate({opacity:1},1000);
		$(".tm3").addClass("d3_dh2");
		setTimeout(function(){
			$(".b3 .txt2").animate({opacity:1},1000);
		},500);
	},600);
}

function b4In(){
	$(".floatNav .tab li").removeClass("on").eq(3).addClass("on");
	$(".tm4 .box .z2").animate({opacity:1},1200);			
	$(".tm4").addClass("d4_dh");
	setTimeout(function(){
		$(".tm4").addClass("d4_dh2");
		setTimeout(function(){
			$(".tm4").addClass("d4_dh3");
			$(".b4 .txt2").animate({opacity:1},1000);
		},500);
	},600);
}
function b5In(){	
$(".floatNav .tab li").removeClass("on").eq(4).addClass("on");
	$(".tm5").addClass("d5_dh");
	setTimeout(function(){
		$(".tm5").addClass("d5_dh2");
	},600);
}
function b6In(){
	$(".floatNav .tab li").removeClass("on").eq(5).addClass("on");
	$(".tm6").addClass("d6_dh");
	setTimeout(function(){
		$(".tm6").addClass("d6_dh2");
		setTimeout(function(){
			$(".tm6").addClass("d6_dh3");
			setTimeout(function(){
				$(".tm6").addClass("d6_dh4");
			},300);
		},300);
	},600);
}





});
