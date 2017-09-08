$(function(){
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		var top2 = $('.waterwall1').eq(0).offset().top;
		var top_waterwall = top2 - top1;
		if(top_waterwall > 0) {
			$('.hostel-sidebar').animate({
				"top": top_waterwall
			}, 1);
		} else {
			$('.hostel-sidebar').css('top', '0');
		}
	});
})
var init = function() {
	//调用地址解析类
	geocoder = new qq.maps.Geocoder({
		complete: function(result) {
			var center = result.detail.location;
			var map = new qq.maps.Map(
				document.getElementById('hostel_map'), {
					center: center,
					zoom: 17
				});
			var marker = new qq.maps.Marker({
				position: center,
				map: map
			});
		}
	});
	var address = document.getElementById("address1").innerHTML;
	//通过getLocation();方法获取位置信息值
	geocoder.getLocation(address);

}