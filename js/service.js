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



//ͼƬ�ֲ�
var n = 0,t;
var numPic = $(".fouce .info").length;
if(numPic == 1){
	$(".slidebox .tabicon").hide();
}else{
	$(".slidebox .tabicon").show();
	autoPlay();
	$(".slidebox").hover(function() {
   	 stopPlay();
	},function() {
   	 autoPlay();
	});
}

$(".slidebox .fouce .info").eq(0).addClass("active");
$(".slidebox li").eq(0).addClass("active");
function bgimg() {
    if (n < numPic-1) {
        n++;
    } else {
        n = 0;
    }
    $(".fouce .info").removeClass("active").eq(n - 1).addClass("last-active");
    $(".fouce .info").eq(n).css({opacity: 0.0}).addClass("active").animate({opacity: 1.0},1000,
    function() {
        $(".fouce .info").removeClass("last-active");
    });
    $(".slidebox li").removeClass("active").eq(n).addClass("active");
	headStyle();
}
headStyle();

//ͷ����ʽ
function headStyle(){
	if($(".fouce .info").eq(n).find(".wrap").hasClass("s1")){
		$(".head").removeClass().addClass("head style_1");
	}else if($(".fouce .info").eq(n).find(".wrap").hasClass("s2")){
		$(".head").removeClass().addClass("head style_2");
	}else{
		$(".head").removeClass().addClass("head style_3");
	}
}

$(".slidebox li").click(function() {
    var tabs = $(this).parents(".slidebox").find("li");
    var nu = $.inArray(this, tabs);
	tabs.removeClass("active").eq(nu).addClass("active");
	
	$(".fouce .info").removeClass("active");
    $(".fouce .info").eq(n).addClass("last-active");
    $(".fouce .info").eq(nu).css({
        opacity: 0.0
    }).addClass("active").animate({
        opacity: 1.0
    },
    1000,
    function() {
        $(".fouce .info").removeClass("last-active");
    });
    n = nu;
	headStyle();

});
var autoPlay = function() {
    t = setInterval(bgimg, 6000);
}
var stopPlay = function() {
    window.clearInterval(t);
}





});
