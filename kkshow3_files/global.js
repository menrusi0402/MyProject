$(function(){





if (!$.support.leadingWhitespace) {
	 $("body").append('<div class="tipMain">为获取最佳体验，请您使用ie9+、chrome、firefox、safair等高级浏览器浏览本站<b class="close">x</b></div>');
	$(".tipMain .close").click(function(){
		$(".tipMain").remove();								
	});
	}else{
		
	}



function wrap(){
	var height =$(window).height();
	var width =$(window).width();					
}
wrap();
$(window).resize(function(){
	wrap();					  
});


window.onload=function(){
	
}

//hero公共底部分类切换
if($('.golbalPage').length>0){
$(".golbalPage .tabs span").click(function () {
	var tabs = $(this).parents(".tabs").children("span");
	var panels =$(this).parents(".tabBox").find(".tabMain");
	var index = $.inArray(this, tabs);
	tabs.removeClass("on").eq(index).addClass("on");
	panels.hide().eq(index).show();
});
}


//产品二级菜单
var cpNav,cpNavClose,cpNavClose2;
$(".cpBtn").mouseover(function(){
	clearTimeout(cpNavClose);
	$(".menubg").slideDown(200);
	cpNav=setTimeout(function(){
		$(".cpNav").fadeIn(200);
		$(".menubg").show();
		$(".head").addClass("headHover");
	},200);
	
});
$(".cpBtn").mouseout(function(){
	clearTimeout(cpNavClose);
	cpNavClose=setTimeout(function(){
       $(".menubg").hide();
		$(".cpNav").hide();
		$(".head").removeClass("headHover");
     },200);
});

$(".cpNav").mouseover(function(){
	clearTimeout(cpNavClose);
	$(".menubg").show();
	$(".cpNav").show();
	$(".head").addClass("headHover");
});
$(".cpNav").mouseout(function(){
	clearTimeout(cpNavClose);
	cpNavClose=setTimeout(function(){
       $(".menubg").hide();
		$(".cpNav").hide();
		$(".head").removeClass("headHover");
     },200);
});



//产品二级菜单
var serNav,serNavClose,serNavClose2;
$(".serBtn").mouseover(function(){
	clearTimeout(serNavClose);
	$(".menubg").slideDown(200);
	serNav=setTimeout(function(){
		$(".serNav").fadeIn(200);
		$(".menubg").show();
		$(".head").addClass("headHover");
	},200);
	
});
$(".serBtn").mouseout(function(){
	clearTimeout(serNavClose);
	serNavClose=setTimeout(function(){
       $(".menubg").hide();
		$(".serNav").hide();
		$(".head").removeClass("headHover");
     },200);
});

$(".serNav").mouseover(function(){
	clearTimeout(serNavClose);
	$(".menubg").show();
	$(".serNav").show();
	$(".head").addClass("headHover");
});
$(".serNav").mouseout(function(){
	clearTimeout(serNavClose);
	serNavClose=setTimeout(function(){
       $(".menubg").hide();
		$(".serNav").hide();
		$(".head").removeClass("headHover");
     },200);
});
//
//
//
//
//
//$(".cpNav").hover(function(){
//	$(".menubg").show();
//	$(".cpNav").show();
//	$(".head").addClass("headHover");
//},function(){
//	clearTimeout(cpNavClose);
//	cpNavClose()
//});
//
//
//
//function cpNavClose(){
//	cpNavClose=setTimeout(function(){
//	$(".cpNav").hide();
//	$(".menubg").stop(true,false).slideUp(300);
//	$(".head").removeClass("headHover");
//	},500);
//}





//服务二级菜单
//var serNav,serNavClose;
//$(".serBtn").hover(function(){
//	$(".menubg").stop(true,false).slideDown(350);
//	serNav = setTimeout(function(){
//		$(".serNav").stop(true).fadeIn(300);
//	},300);
//	$(".head").addClass("headHover");
//	clearTimeout(serNavClose);
//},function(){
//	clearTimeout(serNav);
//	clearTimeout(serNavClose);
//	 serNavClose=setTimeout(function(){
//    	$(".serNav").hide();
//		$(".menubg").hide();
//		$(".head").removeClass("headHover");
//    },300);
//});
//$(".serNav").hover(function(){
//	$(".menubg").show();
//	$(".serNav").show();
//	$(".head").addClass("headHover");
//},function(){
//	clearTimeout(serNavClose);
//	 serNavClose=setTimeout(function(){
//    	$(".serNav").hide();
//		$(".menubg").stop(true,false).slideUp(300);
//		$(".head").removeClass("headHover");
//    },300);
//});



//搜素
$(".searchIcon").click(function(){
	$(this).fadeOut();
	$(".menu ul").fadeOut();
	$(".searchBox").slideDown();
	$(".zzBox").fadeIn();
	$("body").addClass("hidden");
	s_an();
});
$(".searchBox .close").click(function(){
	$(".menu ul").fadeIn();
	$(".searchBox").hide();
	$(".searchIcon").fadeIn();
	$(".zzBox").fadeOut();
	$("body").removeClass("hidden");
	$(".searchBox").removeClass("s_dh1 s_dh2 s_dh3 s_dh4 s_dh5 s_dh6");
});

function s_an(){
	$(".searchBox").addClass("s_dh1");
	 setTimeout(function(){
		$(".searchBox").addClass("s_dh2");
		setTimeout(function(){
			$(".searchBox").addClass("s_dh3");
			setTimeout(function(){
				$(".searchBox").addClass("s_dh4");
				setTimeout(function(){
					$(".searchBox").addClass("s_dh5");
					setTimeout(function(){
						$(".searchBox").addClass("s_dh6");
					},100);
				},100);
			},100);
		},100);
	},100);
	
	
}




//select模拟
if($(".select .selBox").length>0){
$(".select .selBox").each(function(){  
var valTxt = $(this).find("li.sel").html();
if(!valTxt){
	valTxt = '';
}
var valTtm = "<span class='valTxt'>" + valTxt +"</span>";
var num =$(this).parents(".select").find(".valTxt");
	if(num.length == 0){
       $(this).before(valTtm);
	}else{
		num.html($(this).find("li.sel").html());
	}
});
$(".select .valTxt").click(function(){
	$(".select .selBox").hide();
	$(this).parents(".select").find(".selBox").slideToggle();	
});
$(".select li").click(function(){
	var txt = $(this).html();
	$(this).parents(".select").find(".valTxt").html(txt);
	$(this).addClass("sel").siblings().removeClass("sel");
	$(this).parents(".select").find(".selBox").hide();
});
$(document).bind("click",function(e){
   var target  = $(e.target);
   if(target.closest(".select").length == 0){
       $(".selBox").hide();
}
});
}

//文本框水印
function inputTipText(){   
$("input[class*=inputText]").each(function(){  
	var valTxt = $(this).attr("title");
	var htm = "<label class='tipTxt'>" + valTxt +"</label>"
	$(this).after(htm);
	$(this).keyup(function(){($(this).val()=="")?$(this).next().show():$(this).next().hide();}); 
	if($(this).val()==""){
		$(this).next().show();
	}else{
		$(this).next().hide();
		}
	$(".tipTxt").click(function(){
	$(this).prev().focus();					
	});
});  
} 
inputTipText();

$(".footer .other a.wx").hover(function(){
	$(this).find("i").fadeIn();									
},function(){
	$(this).find("i").hide();
});

//页面跳转
$(".url").click(function(){
	var href = $(this).attr("alt");
	window.location.href = href;
});
$(".url2").click(function(){
	var href = $(this).attr("alt");
	window.open(href);
});

//hero back
var topHtml = '<a href="#1" class="backTop"><i></i><span>返回顶部</span></a>';
if($("#homepage").length>0){
	$("body").append(topHtml);
}


});
