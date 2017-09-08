$(function(){
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});
	//	电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.food-nav').offset().top) {
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
//	店铺标题移入效果
	$('.details').hover(function(){
		$(this).addClass('over');
		$('.details .list .na .glyphicon').removeClass('glyphicon-chevron-down');
		$('.details .list .na .glyphicon').addClass('glyphicon-chevron-up');
	},function(){
		$(this).removeClass('over');
		$('.details .list .na .glyphicon').removeClass('glyphicon-chevron-up');
		$('.details .list .na .glyphicon').addClass('glyphicon-chevron-down');
	});
//	购物车判断事件
    function cartIsnNone(){
    	if($('.order-list .food').length==0){
			$('.order-list').css('top',0);
		}else{
			$('.order-list').css('top','-'+$('.order-list').height()+'px');
		};
    };
	cartIsnNone();
	var food_money = 0;
	$('.order-list .food').each(function(){
		food_money = food_money+parseFloat($(this).find('.pri span').html())*$(this).find('.text-count').val();
	});
	if(food_money<$('.margintominprice').val()){
		$('.go-pay').css('display','none');
		$('.ready-pay').css('display','inline-block');
	}else{
		$('.ready-pay').css('display','none');
		$('.go-pay').css('display','inline-block');
	}
	//	数量改变
	$('.order-list .food .minus').click(function() {
		if($(this).parent().find('.text-count').val() == 1) {
			$(this).parent().parent().remove();
			cartIsnNone()

		} else if($(this).parent().find('.text-count').val() > 1) {
			$(this).parent().find('.text-count').val(parseInt($(this).parent().find('.text-count').val()) - 1);
		}
	});
	$('.order-list .food .plus').click(function() {
		if($(this).parent().find('.text-count').val() > 0&&$(this).parent().find('.text-count').val() < 10) {
			$(this).parent().find('.text-count').val(parseInt($(this).parent().find('.text-count').val()) + 1);
		} else if($(this).parent().find('.text-count').val() < 0){
			$(this).parent().find('.text-count').val(1);
		}else{
			$(this).parent().find('.text-count').val(10);
		}

	});
	$('.order-list .food .text-count').blur(function() {
		if(isNaN($(this).val())) {
			$(this).val(1);
		} else {
			if($(this).val() < 1) {
				$(this).val(1);
			}else if($(this).val() > 10){
				$(this).val(10);
			}

		}
	});
//	添加美食
	$('.pic-food .add-icon').click(function(){
		var food_cart_num = parseInt($(this).parent().find('.food-cart-num').html());
		food_cart_num++;
		$(this).parent().find('.food-cart-num').html(food_cart_num);
		$(this).parent().find('.food-cart-num').css('display','block');
	})
	
	
})