$(function() {
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});
	
//	电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.k-content').offset().top) {
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
	
	
//	提示工具
	$("[data-toggle='tooltip']").tooltip();

	//	账户余额显示按钮
	$('.k-assets-visible-icon').eq(0).click(function() {
		$('.k-assets-balance').find('.k-assets-container').eq(0).css('display', 'none');
		$('.k-assets-balance').find('.k-assets-container').eq(1).css('display', 'block');
	});
	$('.k-assets-visible-icon').eq(1).click(function() {
		$('.k-assets-balance').find('.k-assets-container').eq(1).css('display', 'none');
		$('.k-assets-balance').find('.k-assets-container').eq(0).css('display', 'block');
	});
	$('.k-assets-visible-icon').eq(2).click(function() {
		$('.k-assets-mfund').find('.k-assets-container').eq(0).css('display', 'none');
		$('.k-assets-mfund').find('.k-assets-container').eq(1).css('display', 'block');
	});
	$('.k-assets-visible-icon').eq(3).click(function() {
		$('.k-assets-mfund').find('.k-assets-container').eq(1).css('display', 'none');
		$('.k-assets-mfund').find('.k-assets-container').eq(0).css('display', 'block');
	});
})