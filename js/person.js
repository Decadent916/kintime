$(function() {
	$.get('header.html', function(data) {
		$('header').append(data);
	});
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});

	//	左侧菜单点击改变CSS
	$('.left-menu').click(function() {
		$('.left-menu').find('a').removeClass('left-menu_click');
		$(this).find('a').addClass('left-menu_click');
	});

	$('#collapseOne').collapse('show');
	$('#collapseTwo').collapse('show');
	$('#collapseThree').collapse('show');
	$('#collapseFour').collapse('show');

	if(document.URL.indexOf('?') ==-1){
		turnpage('security');
	}else{
		var ajaxurl = document.URL.slice(document.URL.indexOf('?')+1,document.URL.length+1);
		turnpage(ajaxurl);
		$('.left-menu').eq(3).find('a').addClass('left-menu_click');
	}
	
})
//	改变右侧内容
function turnpage(url) {
	var url0 = document.URL;
	var num = url0.indexOf('?');
	var oldurl;
	if(num == -1) {
		oldurl = url0;
	} else {
		oldurl = url0.slice(0, num);
	}
	var newurl = oldurl + '?' + url;
	history.pushState(null, null, newurl);
	var ajaxurl = url + '.html'
	$.ajax({
		type: "post",
		url: ajaxurl,
		success: function(html) {
			$('.mainbox').html(html);
		}
	});
}