$(function() {
	$('.addressform1').find('input').blur(function() {
		if($(this).val() == null || $(this).val() == "") {
			$(this).css('border-color', '#f76120');
			$(this).parent().find('span').css('display', 'inline-block');
		}
		else{
			$(this).css('border-color', '#aaa');
			$(this).parent().find('span').css('display', 'none');
		}
	});
	$('.addressform').find('input').focus(function() {
		$(this).parent().find('span').css('display', 'none');

	});
});

function saveValue() {
	var html = '<tr class="active"><td>'+$('#name').val()+'</td><td>'+$('#citySelect').val()+$('#street').val()+','+$('#zipcode').val()+'</td><td>'+$('#phone').val()+'</td><td><a href="#">设为默认</a><a href="javascript:" onclick="deleteaddress()">删除</a><a href="#">修改</a></td></tr>';
	$('.table').find('tbody').append(html);
}
