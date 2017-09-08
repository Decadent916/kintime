$(function(){
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});
	//	电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.rest-banner').offset().top) {
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
	
	
//	商品鼠标移入移出
	$('.rest-li').hover(
		function(){
			$(this).addClass('hover');

		},
		function(){
			$(this).removeClass('hover');
		}
	);
	//					商品收藏
	$('.j-save').click(function(){
		if($(this).hasClass('un-favorite')){
			$(this).removeClass('un-favorite');
			$(this).addClass('favorite');
		}else{
			$(this).removeClass('favorite');
			$(this).addClass('un-favorite');
		}
	})
	
})