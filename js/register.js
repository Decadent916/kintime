$(function(){
	$.get('footer.html',function(data){
		$('footer').append(data);
	});
})