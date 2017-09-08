$(function(){
	$.get('header.html', function(data) {
		$('header').append(data);
	});
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});
//	电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.store-salelist').offset().top) {
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
//	特色菜更多
	$('.menu-items').find('.more').click(function(){
		$('.menu-items').find('table').removeClass('hidden');
		$(this).parents('table').addClass('hidden');
	});
	var width0=$('.menu-pic').find('.pic-item').css('width');
	$('.menu-pic').find('.pic-item').css('height',width0);
//	蒙板
	$('.overlay').height($(document).height());
//	打开地图事件
	$('.map-icon').click(function(){
		$('.overlay').css('visibility','visible');
		$('#map-wrapper').css('visibility','visible');
	});
//	关闭地图事件
	$('.close-btn').click(function(){
		$('.overlay').css('visibility','hidden');
		$('#map-wrapper').css('visibility','hidden');
	})
//	查看执照
	$('.shop-identity').click(function(){
		$('.overlay').css('visibility','visible');
		$('.food-safe-info').css('visibility','visible');
	});
//	关闭执照事件
	$('.food-safe-close').click(function(){
		$('.overlay').css('visibility','hidden');
		$('.food-safe-info').css('visibility','hidden');
	})
})


//地图
var geocoder, map, marker = null;
var init = function() {
	var center = new qq.maps.LatLng(39.916527, 116.397128);
	map = new qq.maps.Map(document.getElementById('map1'), {
		center: center,
		zoom: 17,
	});

	//地址和经纬度之间进行转换服务
	geocoder = new qq.maps.Geocoder();
	var address = document.getElementById('geo').innerHTML;
	//对指定地址进行解析
	geocoder.getLocation(address);
	//设置服务请求成功的回调函数
	geocoder.setComplete(function(result) {
		map.setCenter(result.detail.location);
		marker = new qq.maps.Marker({
			map: map,
			position: result.detail.location
		});
		//点击Marker会弹出反查结果
		//		qq.maps.event.addListener(marker, 'click', function() {
		//			alert("坐标地址为： " + result.detail.location);
		//		});
	});
	//若服务请求失败，则运行以下函数
	//      geocoder.setError(function() {
	//          alert("出错了，请输入正确的地址！！！");
	//      });

}