$(document).ready(function(){
	menu();
});
	//头部导航链接样式
function menu(){
	$(".nav>ul>li:not(#n0)").hover(function(){
	//鼠标移动该栏目
	$(".nav>ul>li:not(#n0)").removeClass("on");
	$(this).addClass("on");
	$(this).find("ul").show();
		},function(){
			//鼠标离开项目
			$(this).removeClass("on");
			$(this).find("ul").hide();
		});
}