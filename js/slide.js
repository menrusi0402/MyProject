$(function(){

function wrap(){
	var height =$(window).height();
	var width =$(window).width();
    var Imgleft =($(".slidebox .wrap .bg").width() - 1000)/2
    $(".slidebox .wrap .bg").css({left:-Imgleft});
					
}
wrap();
$(window).resize(function(){
	wrap();	
	 var Imgleft =($(".slidebox .wrap .bg").width() - 1000)/2
    $(".slidebox .wrap .bg").css({left:-Imgleft});
});

		
//初始化
var n = 0;
var numPic = $(".fouce .info").length;
if(numPic == 1){
	$(".slidebox .tabicon").hide();
}else{
	$(".slidebox .tabicon").show();
}
$(".slidebox .fouce .info").eq(0).addClass("active");
$(".slidebox li").eq(0).addClass("active");
headStyle();


//图片切换
function bgimg() {
    if (n < numPic) {
        n++;
    } else {
        n = 0;
    }
    $(".fouce .info").removeClass("active").eq(n - 1).addClass("last-active");
    $(".fouce .info").eq(n).css({opacity: 0.0}).addClass("active").animate({opacity: 1.0},1000,function() {
        $(".fouce .info").removeClass("last-active");
    });
    $(".slidebox li").removeClass("active").eq(n).addClass("active");
	headStyle();	
}


//头部样式
function headStyle(){
	if($(".fouce .info").eq(n).find(".wrap").hasClass("s1")){
		$(".head").removeClass("style_1 style_2 style_3").addClass("style_1");
	}else if($(".fouce .info").eq(n).find(".wrap").hasClass("s2")){
		$(".head").removeClass("style_1 style_2 style_3").addClass("style_2");
	}else{
		$(".head").removeClass("style_1 style_2 style_3").addClass("style_3");
	}
}
//点击效果
$(".slidebox li").click(function() {
    var tabs = $(this).parents(".slidebox").find("li");
    var nu = $.inArray(this, tabs);
	tabs.removeClass("active").eq(nu).addClass("active");
	
	$(".fouce .info").removeClass("active");
    $(".fouce .info").eq(n).addClass("last-active");
    $(".fouce .info").eq(nu).css({opacity: 0.0
    }).addClass("active").animate({opacity: 1.0
    },1000,function() {
        $(".fouce .info").removeClass("last-active");
    });
    n = nu;
	headStyle();
});
//执行
var autoPlay = function() {
    t = setInterval(bgimg,5000);
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



$(".slidebox .info").click(function(){
    href = $(this).attr("alt");
	
    if (href == '') {
        return false;
    } else {
        window.open(href);
    }
    return false;
});


});
