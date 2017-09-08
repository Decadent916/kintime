$(function() {
	$.get('header.html', function(data) {
		$('header').append(data);
	});
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});

	//	电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.ticket-header').offset().top) {
			$('.elevator2').css('display', 'block');
		} else {
			$('.elevator2').css('display', 'none');
		};
	});
	$('#elevator2_top').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 'slow');
	});


//点击空白选择框隐藏
	$("body").bind("click",function(evt){
	                if($(evt.target).parents('.month-selector').length==0) 
	                {
	                    $('.popup').hide();
	                };
	                if($(evt.target).parents('.start-city>div:first').length==0) 
	                {
	                    $('.picker-body').eq(0).hide();
	                };
	                if($(evt.target).parents('.end-city>div:first').length==0) 
	                {
	                    $('.picker-body').eq(1).hide();
	                };
	            });
//	城市选择
//	点击出现
	$('.picker-input').click(function(){
		if($(this).parent().find('.picker-body').is(':hidden')){
			$(this).parent().find('.picker-body').show();
		}else{
			$(this).parent().find('.picker-body').hide();
		}
	})
//	点击选择城市
	$('.city-item').click(function(){
//		出发城市
		if(!$(this).parents('.start-city>div:first').length==0){
			$('.picker-input').eq(0).html('<img src="img/ticket2.png" class="picker-input-ico"/>'+$(this).html());
			$('.picker-body').css('display','none');
		};
//		到达城市
		if(!$(this).parents('.end-city>div:first').length==0){
			$('.picker-input').eq(1).html('<img src="img/ticket4.png" class="picker-input-ico"/>'+$(this).html());
			$('.picker-body').css('display','none');
		}
	})
//	出发时间选择
//	点击出现
	$('.val').click(function(){
		if($('.popup').is(':hidden')){
			$('.popup').show();
		}else{
			$('.popup').hide();
		}
	})
//	点击选择月份
	$('.popup').find('li').click(function(){
		if(!$(this).hasClass('disabled')){
			$('.val').find('span').html($(this).html());
			$('.popup').css('display','none');
		}
		
	})
	
//切换城市标签
//	出发城市国内
	$('.picker-tab-int1').eq(0).find('.picker-tab-item').click(function(){
		$('.picker-tab-int1').eq(0).find('.picker-tab-item').removeClass('picker-tab-item-clicked');
		$(this).addClass('picker-tab-item-clicked');
	});
//	出发城市国际
	$('.picker-tab-int1').eq(1).find('.picker-tab-item').click(function(){
		$('.picker-tab-int1').eq(1).find('.picker-tab-item').removeClass('picker-tab-item-clicked');
		$(this).addClass('picker-tab-item-clicked');
	})
//	到达城市国内
	$('.picker-tab-int1').eq(2).find('.picker-tab-item').click(function(){
		$('.picker-tab-int1').eq(2).find('.picker-tab-item').removeClass('picker-tab-item-clicked');
		$(this).addClass('picker-tab-item-clicked');
	})
//	到达城市国际
	$('.picker-tab-int1').eq(3).find('.picker-tab-item').click(function(){
		$('.picker-tab-int1').eq(3).find('.picker-tab-item').removeClass('picker-tab-item-clicked');
		$(this).addClass('picker-tab-item-clicked');
	})
})

