$(function(){
	//	引入尾部
	$.get("header.html",function(data){
		$("header").append(data);
	});
	
//	引入尾部
	$.get("footer.html",function(data){
		$("footer").append(data);
	});
	
	
	
	
//	限时特惠
	$('.special_s').each(function(index){
		$(this).hover(
			function(){
				$('.special_ckxq').eq(index).css('display','block');
			},
			function(){
				$('.special_ckxq').eq(index).css('display','none');
			}
		)
	});
//电梯
	$(window).scroll(function(){
		var top1 = $(window).scrollTop();
//		var top2 = $('.show').offset().top;
//		var top3 = top2-top1;
		var top4 = $('.show1').eq(0).offset().top;
		var top5 = $('.show1').eq(1).offset().top;
		var top6 = $('.show1').eq(2).offset().top;
		var top7 = $('.show1').eq(3).offset().top;
		var top8 = $('.show1').eq(4).offset().top;
		var top9 = $('.show1').eq(5).offset().top;
		var top10 = $('.show1').eq(6).offset().top;
		var top11= $('.show1').eq(7).offset().top;
		var top_food = top4-top1;
		var top_hostel = top5-top1;
		var top_play = top6-top1;
		var top_shopping = top7-top1;
		var top_train = top8-top1;
		var top_ticket = top9-top1;
		var top_takeaway = top10-top1;
		var top_money = top11-top1;
//		左侧移动后固定
		if(top_food>0){
			$('.elevator1').animate({"top":top_food},1);
		}else{
			$('.elevator1').css('top','0');
		};
//		左侧随距离变色
		if(top_food<0 && top_hostel>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(0).find('a').addClass('elevator_l-click');
		};
		if(top_hostel<0 && top_play>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(1).find('a').addClass('elevator_l-click');
		};
		if(top_play<0 && top_shopping>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(2).find('a').addClass('elevator_l-click');
		};
		if(top_shopping<0 && top_train>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(3).find('a').addClass('elevator_l-click');
		};
		if(top_train<0 && top_ticket>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(4).find('a').addClass('elevator_l-click');
		};
		if(top_ticket<0 && top_takeaway>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(5).find('a').addClass('elevator_l-click');
		};
		if(top_takeaway<0 && top_money>0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(6).find('a').addClass('elevator_l-click');
		};
		if(top_money<0){
			$('.elevator_l').find('a').removeClass('elevator_l-click');
			$('.elevator_l').eq(7).find('a').addClass('elevator_l-click');
		};
		
		
		
//		右侧移动后显示
		if(top1>$('#sort1').offset().top){
			$('.elevator2').css('display','block');
		}else{
			$('.elevator2').css('display','none');
		};
	});
	$('#elevator2_top').click(function(){
		$('html,body').animate({scrollTop:0},'slow');
	});
//	左侧点击事件
	$('.elevator_l').click(function(){
		$('.elevator_l').find('a').removeClass('elevator_l-click');
		$(this).find('a').addClass('elevator_l-click');
	});
	
})