$(function(){
	$.get('header.html', function(data) {
		$('header').append(data);
	});
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});
	$("[data-toggle='tooltip']").tooltip();
	//	电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.hostel-deallist').offset().top) {
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
//	日历控件
	var myDate = new Date;
	var today = myDate.getDate();
	var month = myDate.getMonth()+1;
	var year  = myDate.getFullYear();
	$('#checkin-date').val(year+'-'+month+'-'+today);
	$('#checkin-date').click(function(){
		if($('.date-selector-in').css('display')=='none'){
			$('.date-selector-in').css('display','block');
			$('.date-selector-out').css('display','none');
		}else{
			$('.date-selector-in').css('display','none');
		};
	});
	$('.date-selector-in .date-selector-changeyear').val(year);
	$('.date-selector-in .date-selector-changemonth').val(month);
	date_sort_in($('.date-selector-in .date-selector-changeyear').val(),$('.date-selector-in .date-selector-changemonth').val());
	
	
	var s_today = parseInt($('#checkin-date').val().slice($('#checkin-date').val().lastIndexOf('-')+1,$('#checkin-date').val().length))+1;
	var s_month = parseInt($('#checkin-date').val().slice($('#checkin-date').val().indexOf('-')+1,$('#checkin-date').val().lastIndexOf('-')));
	var s_year = parseInt($('#checkin-date').val().slice(0,$('#checkin-date').val().indexOf('-')));
	$('#checkout-date').val(s_year+'-'+s_month+'-'+s_today);
	$('#checkout-date').click(function(){
		if($('.date-selector-out').css('display')=='none'){
			$('.date-selector-out').css('display','block');
			$('.date-selector-in').css('display','none');
		}else{
			$('.date-selector-out').css('display','none');
		};
	});
	$('.date-selector-out .date-selector-changeyear').val(s_year);
	$('.date-selector-out .date-selector-changemonth').val(s_month);
	date_sort_out($('.date-selector-out .date-selector-changeyear').val(),$('.date-selector-out .date-selector-changemonth').val());
				//日期选择
	$('.date-selector-in .date-selector-able').click(function(){
		$('.date-selector-in .date-selector-able').removeClass('date-selector-select');
		$(this).addClass('date-selector-select');
		$('#checkin-date').val($('.date-selector-in .date-selector-changeyear').val()+'-'+$('.date-selector-in .date-selector-changemonth').val()+'-'+$(this).html());
		s_today = parseInt($('#checkin-date').val().slice($('#checkin-date').val().lastIndexOf('-')+1,$('#checkin-date').val().length))+1;
		s_month = parseInt($('#checkin-date').val().slice($('#checkin-date').val().indexOf('-')+1,$('#checkin-date').val().lastIndexOf('-')));
		s_year = parseInt($('#checkin-date').val().slice(0,$('#checkin-date').val().indexOf('-')));
		$('#checkout-date').val(s_year+'-'+s_month+'-'+s_today);
		$('.date-selector-out .date-selector-changeyear').val(s_year);
		$('.date-selector-out .date-selector-changemonth').val(s_month);
		date_sort_out($('.date-selector-out .date-selector-changeyear').val(),$('.date-selector-out .date-selector-changemonth').val());
	});
	$('.date-selector-out .date-selector-able').click(function(){
		$('.date-selector-out .date-selector-able').removeClass('date-selector-select');
		$(this).addClass('date-selector-select');
		$('#checkout-date').val($('.date-selector-out .date-selector-changeyear').val()+'-'+$('.date-selector-out .date-selector-changemonth').val()+'-'+$(this).html());
	})
				//更换月份	
	$('.date-selector-in .cal-nav-pre-m').click(function(){
		if($('.date-selector-in .date-selector-changemonth').val()>1){
			$('.date-selector-in .date-selector-changemonth').val($('.date-selector-in .date-selector-changemonth').val()-1);
			date_sort_in($('.date-selector-in .date-selector-changeyear').val(),$('.date-selector-in .date-selector-changemonth').val());
		}else{
			$('.date-selector-in .date-selector-changeyear').val($('.date-selector-in .date-selector-changeyear').val()-1);
			$('.date-selector-in .date-selector-changemonth').val('12');
			date_sort_in($('.date-selector-in .date-selector-changeyear').val(),$('.date-selector-in .date-selector-changemonth').val());
		};
	});	
	$('.date-selector-in .cal-nav-next-m').click(function(){
		if($('.date-selector-in .date-selector-changemonth').val()<12){
			$('.date-selector-in .date-selector-changemonth').val(parseInt($('.date-selector-in .date-selector-changemonth').val())+1);
			date_sort_in($('.date-selector-in .date-selector-changeyear').val(),$('.date-selector-in .date-selector-changemonth').val());
		}else{
			$('.date-selector-in .date-selector-changeyear').val(parseInt($('.date-selector-in .date-selector-changeyear').val())+1);
			$('.date-selector-in .date-selector-changemonth').val('1');
			date_sort_in($('.date-selector-in .date-selector-changeyear').val(),$('.date-selector-in .date-selector-changemonth').val());
		};
	});	
	$('.date-selector-out .cal-nav-pre-m').click(function(){
		if($('.date-selector-out .date-selector-changemonth').val()>1){
			$('.date-selector-out .date-selector-changemonth').val($('.date-selector-out .date-selector-changemonth').val()-1);
			date_sort_out($('.date-selector-out .date-selector-changeyear').val(),$('.date-selector-out .date-selector-changemonth').val());
		}else{
			$('.date-selector-out .date-selector-changeyear').val($('.date-selector-out .date-selector-changeyear').val()-1);
			$('.date-selector-out .date-selector-changemonth').val('12');
			date_sort_out($('.date-selector-out .date-selector-changeyear').val(),$('.date-selector-out .date-selector-changemonth').val());
		};
	});	
	$('.date-selector-out .cal-nav-next-m').click(function(){
		if($('.date-selector-out .date-selector-changemonth').val()<12){
			$('.date-selector-out .date-selector-changemonth').val(parseInt($('.date-selector-out .date-selector-changemonth').val())+1);
			date_sort_out($('.date-selector-out .date-selector-changeyear').val(),$('.date-selector-out .date-selector-changemonth').val());
		}else{
			$('.date-selector-out .date-selector-changeyear').val(parseInt($('.date-selector-out .date-selector-changeyear').val())+1);
			$('.date-selector-out .date-selector-changemonth').val('1');
			date_sort_out($('.date-selector-out .date-selector-changeyear').val(),$('.date-selector-out .date-selector-changemonth').val());
		};
	});		
	//日期排序
	function date_sort_in(n_year,n_month){
		var nowmonth = new Date(n_year,n_month-1,1);
		var nextmonth = new Date(n_year,n_month,1);
		var nowmonth_datecount = (new Date(nextmonth - nowmonth))/(1000*60*60*24);
		var firstday_week = nowmonth.getDay();
		$('.date-selector-in .date-selector-table').find('td').each(function(){
			$(this).html('');
			$(this).removeClass('date-selector-able');
			$(this).removeClass('date-selector-select');
			$(this).removeClass('date-selector-today');
		});
		for(var i= 0 ;i<nowmonth_datecount;i++){
			if(firstday_week == 0){
				firstday_week = 7;
				$('.date-selector-in .date-selector-table').find('td').eq(firstday_week-1).html(i+1);
			}else{
				$('.date-selector-in .date-selector-table').find('td').eq(firstday_week-1).html(i+1);
			};
			
			if((i+2>today&&n_month == month&&n_year==year)||(n_month> month&&n_year==year)||n_year>year){
				$('.date-selector-in .date-selector-table').find('td').eq(firstday_week-1).addClass('date-selector-able');
			};
			if((i+1)==today&&n_month == month&&n_year==year){
				$('.date-selector-in .date-selector-table').find('td').eq(firstday_week-1).addClass('date-selector-today');
				$('.date-selector-in .date-selector-table').find('td').eq(firstday_week-1).addClass('date-selector-select');
			};
			firstday_week++;
		};
	};
	function date_sort_out(n_year,n_month){
		var nowmonth = new Date(n_year,n_month-1,1);
		var nextmonth = new Date(n_year,n_month,1);
		var nowmonth_datecount = (new Date(nextmonth - nowmonth))/(1000*60*60*24);
		var firstday_week = nowmonth.getDay();
		$('.date-selector-out .date-selector-table').find('td').each(function(){
			$(this).html('');
			$(this).removeClass('date-selector-able');
			$(this).removeClass('date-selector-select');
			$(this).removeClass('date-selector-today');
		});
		for(var i= 0 ;i<nowmonth_datecount;i++){
			if(firstday_week == 0){
				firstday_week = 7;
				$('.date-selector-out .date-selector-table').find('td').eq(firstday_week-1).html(i+1);
			}else{
				$('.date-selector-out .date-selector-table').find('td').eq(firstday_week-1).html(i+1);
			};
			if((i+2>s_today&&n_month == s_month&&n_year==s_year)||(n_month> s_month&&n_year==s_year)||n_year>s_year){
				$('.date-selector-out .date-selector-table').find('td').eq(firstday_week-1).addClass('date-selector-able');
			};
			if((i+1)==s_today&&n_month == s_month&&n_year==s_year){
				$('.date-selector-out .date-selector-table').find('td').eq(firstday_week-1).addClass('date-selector-today');
				$('.date-selector-out .date-selector-table').find('td').eq(firstday_week-1).addClass('date-selector-select');
			};
			firstday_week++;
		};
	};
	
})





//地图服务
var geocoder, map, geocoder1, map1, marker = null;
var markers = [];
var init = function() {
	var center = new qq.maps.LatLng(39.916527, 116.397128);
	map = new qq.maps.Map(document.getElementById('left-content'), {
		center: center,
		zoom: 17,
	});
	map1 = new qq.maps.Map(document.getElementById('map1'), {
		center: center,
		zoom: 17,
	});

	//地址和经纬度之间进行转换服务
	geocoder = new qq.maps.Geocoder();
	geocoder1 = new qq.maps.Geocoder();
	var address = document.getElementsByClassName('address')[0].innerHTML;
	var address1 = document.getElementById('geo').innerHTML;
	//对指定地址进行解析
	geocoder.getLocation(address);
	geocoder1.getLocation(address1);
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
	geocoder1.setComplete(function(result) {
		map1.setCenter(result.detail.location);
		marker = new qq.maps.Marker({
			map: map1,
			position: result.detail.location
		});
	});

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