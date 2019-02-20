$(function(){

//图片轮播
var n = 0;
var numPic = $(".fouce>div").length;
if(numPic == 1){
	$(".slidebox .tabicon").hide();
}else{
	$(".slidebox .tabicon").show();
}
$(".slidebox .fouce>div").eq(0).addClass("active");
$(".slidebox li").eq(0).addClass("active");
function bgimg() {
    if (n < numPic-1) {
        n++;
    } else {
        n = 0;
    }
    $(".fouce>div").removeClass("active").eq(n - 1).addClass("last-active");
    $(".fouce>div").eq(n).css({opacity: 0.0}).addClass("active").css({opacity: 1.0},
    function() {
        $(".fouce>div").removeClass("last-active");
    });
    $(".slidebox li").removeClass("active").eq(n).addClass("active");
}

$(".slidebox li").click(function() {
    var tabs = $(this).parents(".slidebox").find("li");
    var nu = $.inArray(this, tabs);
	tabs.removeClass("active").eq(nu).addClass("active");
	
	$(".fouce>div").removeClass("active");
    $(".fouce>div").eq(n).addClass("last-active");
    $(".fouce>div").eq(nu).css({
        opacity: 0.0
    }).addClass("active").animate({
        opacity: 1.0
    },
    1000,
    function() {
        $(".fouce>div").removeClass("last-active");
    });
    n = nu;

});
var autoPlay = function() {
    t = setInterval(bgimg, 600000);
}
var stopPlay = function() {
    window.clearInterval(t);
}
$(".slidebox").hover(function() {
    stopPlay();
},
function() {
    autoPlay();
});
autoPlay();


$(".fixdNav li").click(function(){
	var num = $(this).index(".fixdNav li");		
	$(".fixdNav li").removeClass("active").eq(num).addClass("active");
	$.fn.fullpage.moveTo(num+1,0)
});


	
$(".page6").mousewheel(function(event, delta) {
	var st = $(".page6").scrollTop();
	if((delta == '1') && (st == 0)){
		setTimeout(function() {
			$.fn.fullpage.moveTo(5,0);
		},500)
		
	}
});

//滚动组件调用
$('#homepage').fullpage({
	anchors: ['1', '2', '3', '4', '5', '6'],
	menu: '#menu',
	normalScrollElements: '.page6',
	//navigation: true,
	//navigationTooltips: ['导言', '阐释', '一个家的信仰', '我陪孩子读经典', '国学图书馆', '方太儒道', '每日读经'],
	afterLoad: function(anchorLink, index){
			if(index == 1){b1In();}
			if(index == 2){b2In();}
			if(index == 3){b3In();}
			if(index == 4){b4In();}
			if(index == 5){b5In();}
			if(index == 6){b6In();}
			
	},
	onLeave: function(index,nextIndex,direction){
			
			//进入第一屏
			if (index == 2 && direction == 'up'){
				setTimeout(function(){
					b1In();
				},600);
			}
			//离开第一屏
			if(index == '1'){
				setTimeout(function(){
					b1Out();
				},300);
			}
			
			//进入第二屏
			if ((index == 1 && direction == 'down') || (index == 3 && direction == 'up')){
				setTimeout(function(){
					b2In();
				},600);
			}
			//离开第二屏
			if(index == '2'){
				setTimeout(function(){
					b2Out();
				},300);
			}
			
			//进入第三屏
			if ((index == 2 && direction == 'down') || (index == 4 && direction == 'up')){
				setTimeout(function(){
					b3In();
				},300);
			}
			//离开第三屏
			if(index == '3'){
				setTimeout(function(){
					b3Out();
				},300);
			}
			
			//进入第四屏
			if ((index == 3 && direction == 'down') || (index == 5 && direction == 'up')){
				setTimeout(function(){
					b4In();
				},600);
			}
			//离开第四屏
			if(index == '4'){
				setTimeout(function(){
					b4Out();
				},300);
			}
			
			//进入第五屏
			if ((index == 4 && direction == 'down') || (index == 6 && direction == 'up')){
				setTimeout(function(){
					b5In();
				},600);
			}
			//离开第五屏
			if(index == '5'){
				setTimeout(function(){
					b5Out();
				},300);
			}
			
			//进入第六屏
			if ((index == 5 && direction == 'down') || (index == 7 && direction == 'up')){
				setTimeout(function(){
					b6In();
				},600);
			}
			//离开第六屏
			if(index == '6'){
				setTimeout(function(){
					b6Out();
				},300);
			}

		
			
			
		}


});


function b1In(){
	$(".page1").addClass("b1_dh1");
	setTimeout(function(){
		$(".page1").addClass("b1_dh2");
	},300);
}
function b1Out(){
	$(".page1").removeClass("b1_dh1 b1_dh2");
}

function b2In(){
	$(".page2").addClass("b2_dh1");
	setTimeout(function(){
		$(".page2").addClass("b2_dh2");
	},300);
}
function b2Out(){
	$(".page2").removeClass("b2_dh1 b2_dh2");
}

function b3In(){
	
}
function b3Out(){
	
}

function b4In(){
	//$(".page4 .txt").animate({marginTop:"0",opacity:"show"},1000);
	setTimeout(function(){
		$(".page4").addClass("b4_dh1");
		setTimeout(function(){
			$(".page4").addClass("b4_dh2");
			setTimeout(function(){
				$(".page4").addClass("b4_dh3");
			},300);
		},300);
	},300);
}
function b4Out(){
	//$(".page4 .txt").animate({marginTop:"20px",opacity:"hide"},300);
	$(".page4").removeClass("b4_dh1 b4_dh2 b4_dh3");
}

function b5In(){
	setTimeout(function(){
		$(".page5").addClass("b5_dh1");
		setTimeout(function(){
			$(".page5").addClass("b5_dh2");
			setTimeout(function(){
				$(".page5").addClass("b5_dh3");
			},300);
		},300);
	},300);
}
function b5Out(){
	$(".page5").removeClass("b5_dh1 b5_dh2 b5_dh3");
}

function b6In(){
	setTimeout(function(){
		$(".page6").addClass("b6_dh1");
		setTimeout(function(){
			$(".page6").addClass("b6_dh2");
			setTimeout(function(){
				$(".page6").addClass("b6_dh3");
			},300);
		},300);
	},300);
}
function b6Out(){
	$(".page6").removeClass("b6_dh1 b6_dh2 b6_dh3");
}




$(".page3 .list li").hover(function(){
	$(this).addClass("hover");			
	$(this).find("a").fadeIn();
},function(){
	$(this).removeClass("hover");
	$(this).find("a").hide();
});


//初始化


function wrap(){
	var height =$(window).height();
	var width =$(window).width();
	$(".page6,.page6 .infoBox").height(height);
	//page3
	$(".list li").height($(window).height()/2);
	$(".list li").width($(window).width()/2);
		
	$(".homebox").height(height).width(width);
	
	 var Imgleft1 =($(".homebox .bg").width() - width)/2
     $(".homebox .bg").css({marginLeft:-Imgleft1});
	 
	 var Imgleft2 =($(".page6 .homebox .bg").width() - width)/2
     $(".page6 .homebox .bg").css({marginLeft:-Imgleft2});
	
}
wrap();
$(window).resize(function(){
	wrap();					  
});

window.onload=function(){
	wrap();
	b1In();
	//settime2();
	$(".loading").fadeOut();
	clearTimeout(timeOutFun);
	clearTimeout(timeOutFun2);
	
	//浏览器判断
	if ($.browser.msie && $.browser.version < 9 ){ 
	 	//$(".movie").hide();
	}else{
	//document.getElementById('movie').play();
	//document.getElementById('movie2').play();
		//$(".movie").show();
	}
	
	
}

$(".page3 .item").hover(function(){
	$(this).stop(true).animate({width:$(window).width()*0.5},500);	
	$(this).siblings().stop(true).animate({width:$(window).width()*0.166666},500);
	var imgWidth2 = $(this).find(".pre").find("img").width();
	$(this).find(".bb").find("img").stop(true).animate({left:($(window).width()/2 -imgWidth2)*0.5},500);
	$(this).siblings().find(".bb").find("img").stop(true).animate({left:($(window).width()/6 -imgWidth2)*0.5},500);
		
},function(){
	$(".page3 .box").css({width:$(window).width()*1.1});
	$(this).stop(true).animate({width:$(window).width()*0.25},500);	
	 $(this).siblings().stop(true).animate({width:$(window).width()*0.25},500);
	 var imgWidth2 = $(this).find(".pre").find("img").width();
	$(".page3 .item .bb img").stop(true).animate({left:($(window).width()/4 -imgWidth2)*0.5},500);
	
});

//加载数字
var countdown=0; 
var timeOutFun,timeOutFun2;
function settime() { 
	if (countdown == 100) {  
		countdown = 100; 
		clearTimeout(timeOutFun);
	} else {
		$(".jd1 .num").html(countdown);
		//$(".jindu p").css({width:countdown+"%"});
		countdown++; 	
	} 
	var timeOutFun = setTimeout(function() { 
		settime(); 
	},250) 
}

//加载数字
var countdown2=99; 
function settime2() { 
	$(".jd1").hide();
	$(".jd2").show();
	if (countdown2 == 101) {  
		countdown2 = 101; 
		clearTimeout(timeOutFun2);
	} else {
		$(".jd2 .num").html(countdown2);
		//$(".jindu p").css({width:countdown2+"%"});
		countdown2++; 	
	} 
	var timeOutFun2 = setTimeout(function() { 
		settime2(); 
	},100) 
}

settime();




});
