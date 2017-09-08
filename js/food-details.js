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
		if(top1 > $('.detail-container-left').offset().top) {
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

	//	显示全部
	$('.detail-container-expiry-text-togger').click(function() {
		if($(this).html() == '显示全部') {
			$('.detail-container-expiry-text-wrapper').css('white-space', 'normal');
			$('.detail-container-expiry-text-wrapper').css('display', 'inline');
			$(this).html('收起');
		} else {
			$('.detail-container-expiry-text-wrapper').css('white-space', 'nowrap');
			$('.detail-container-expiry-text-wrapper').css('display', 'inline-block');
			$(this).html('显示全部');
		}

	});
	
//	套餐点击事件
	$('.detail-container-selection-item').click(function(){
		$('.detail-container-selection-item').removeClass('detail-container-selection-item-current');
		$(this).addClass('detail-container-selection-item-current');
	})

	//	数量改变
	$('.detail-container-quantity-less').click(function() {
		if($('.detail-container-quantity-num').val() == 1) {

		} else if($('.detail-container-quantity-num').val() > 1) {
			$('.detail-container-quantity-num').val(parseInt($('.detail-container-quantity-num').val()) - 1);
		}
	});
	$('.detail-container-quantity-add').click(function() {
		if($('.detail-container-quantity-num').val() > 0) {
			$('.detail-container-quantity-warning').html('');
			$('.detail-container-quantity-num').val(parseInt($('.detail-container-quantity-num').val()) + 1);
		} else {
			$('.detail-container-quantity-warning').html('最少一件起售');
			$('.detail-container-quantity-num').val(1);
		}

	});
	$('.detail-container-quantity-num').blur(function() {
		if(isNaN($('.detail-container-quantity-num').val())) {
			$('.detail-container-quantity-num').val(1);
			$('.detail-container-quantity-warning').html('请输入正确的购买数量');
		} else {
			if($('.detail-container-quantity-num').val() < 1) {
				$('.detail-container-quantity-warning').html('最少一件起售');
			} else {
				$('.detail-container-quantity-warning').html('');
			}

		}
	});
	//	收藏
	$('.detail-container-fav').click(function() {
		if($(this).hasClass('fav-icon-clicked')) {
			$('.fav-text').find('span').html('收藏');
			$(this).removeClass('fav-icon-clicked');
			$('.fav-count').html(parseInt($('.fav-count').html()) - 1);
		} else {
			$('.fav-text').find('span').html('已收藏');
			$(this).addClass('fav-icon-clicked');
			$('.fav-count').html(parseInt($('.fav-count').html()) + 1);
		}
	});
	//	折叠
	$('.business-location-list-info-title').find('a').click(function() {
		if($(this).parent().parent().hasClass('business-location-list-info-title-clicked')) {
			$(this).parent().parent().removeClass('business-location-list-info-title-clicked');

		} else {
			$('.business-location-list-info').removeClass('business-location-list-info-title-clicked');
			$(this).parent().parent().addClass('business-location-list-info-title-clicked');
		}
	});
//	评论图片点击事件
	$('.pic-thumb').click(function(){
		if($(this).hasClass('pic-thumb-current')){
			$(this).removeClass('pic-thumb-current');
			$(this).parent().parent().find('.pic-view-list-wrapper').css('display','none');
		}else{
			$('.pic-thumb').removeClass('pic-thumb-current');
			$(this).addClass('pic-thumb-current');
			$(this).parent().parent().find('.pic-view-list-wrapper').css('display','block');
			var src0=$(this).find('img').attr('src').slice($(this).find('img').attr('src').indexOf('/'),$(this).find('img').attr('src').length);
			var newsrc = 'images'+src0;
			$(this).parent().parent().find('.pic-view-list-wrapper').find('img').attr('src',newsrc);
		};
	});
	
	
	
	
	
	
})






//地图服务
var geocoder, map, marker = null;
var markers = [];
var init = function() {
	var center = new qq.maps.LatLng(39.916527, 116.397128);
	map = new qq.maps.Map(document.getElementById('left-content'), {
		center: center,
		zoom: 17,
	});

	//地址和经纬度之间进行转换服务
	geocoder = new qq.maps.Geocoder();
	var address = document.getElementsByClassName('address')[0].innerHTML;
	//对指定地址进行解析
	geocoder.getLocation(address);
	//设置服务请求成功的回调函数
	geocoder.setComplete(function(result) {
		map.setCenter(result.detail.location);
		marker = new qq.maps.Marker({
			map: map,
			position: result.detail.location
		});
		markers.push(marker);
		//点击Marker会弹出反查结果
		//		qq.maps.event.addListener(marker, 'click', function() {
		//			alert("坐标地址为： " + result.detail.location);
		//		});
	});
	//若服务请求失败，则运行以下函数
	//      geocoder.setError(function() {
	//          alert("出错了，请输入正确的地址！！！");
	//      });

	$('.business-location-list-info-title').find('a').click(function() {
		marker.setMap(null);
		geocoder = new qq.maps.Geocoder();
		var address = $(this).parent().parent().find('.address')[0].innerHTML;
		geocoder.getLocation(address);
		geocoder.setComplete(function(result) {
			map.setCenter(result.detail.location);
			marker = new qq.maps.Marker({
				map: map,
				position: result.detail.location
			});
			markers.push(marker);
		});
	});
}