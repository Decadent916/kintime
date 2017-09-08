$(function(){
	$.get('header.html',function(data){
		$('header').append(data);
	});
	$.get('footer.html', function(data) {
		$('footer').append(data);
	});
	
//展示分类
	$('.category-type').click(function(){
		if($('.category-type-tab').css('display')=='none'){
			$('.category-type-tab').css('display','block');
			$('.category-type').css('background-color','#e22127');
		}else{
			$('.category-type-tab').css('display','none');
			$('.category-type').css('background-color','#ff0036');
		}
	})

//分类移入效果
	$('.nav-item').hover(function(){
		$(this).addClass('selected');
	},
	function(){
		$(this).removeClass('selected');
	})
	
	
//	楼层向上轮播
	var time = setInterval(function(){
		$('.color-type-pink').find('.slide-item').eq(0).animate({'margin-top':-30+'px'},400,function(){
			$(this).css('display','none');
			$(this).css('margin-top','0');
			$(this).parent().append($(this));
			$(this).css('display','block');
		});
		$('.color-type-blue').find('.slide-item').eq(0).animate({'margin-top':-30+'px'},400,function(){
			$(this).css('display','none');
			$(this).css('margin-top','0');
			$(this).parent().append($(this));
			$(this).css('display','block');
		});
		$('.color-type-green').find('.slide-item').eq(0).animate({'margin-top':-30+'px'},400,function(){
			$(this).css('display','none');
			$(this).css('margin-top','0');
			$(this).parent().append($(this));
			$(this).css('display','block');
		});
		$('.color-type-red').find('.slide-item').eq(0).animate({'margin-top':-30+'px'},400,function(){
			$(this).css('display','none');
			$(this).css('margin-top','0');
			$(this).parent().append($(this));
			$(this).css('display','block');
		});
		$('.color-type-cyan').find('.slide-item').eq(0).animate({'margin-top':-30+'px'},400,function(){
			$(this).css('display','none');
			$(this).css('margin-top','0');
			$(this).parent().append($(this));
			$(this).css('display','block');
		});
		$('.color-type-orange').find('.slide-item').eq(0).animate({'margin-top':-30+'px'},400,function(){
			$(this).css('display','none');
			$(this).css('margin-top','0');
			$(this).parent().append($(this));
			$(this).css('display','block');
		});
	},4000);
	
//	侧边栏移入效果
	$('.right-fix-tab').hover(function(){
		$(this).addClass('right-fix-tab-hover');
		$(this).find('.right-fix-tab-tip').animate({'right':35+'px','opacity':1});
	},function(){
		$(this).removeClass('right-fix-tab-hover');
		$(this).find('.right-fix-tab-tip').animate({'right':70+'px','opacity':0});
	});
//	侧边栏位置
	function autoheight(){
		var winHeight=0;
	    if (window.innerHeight)
	        winHeight = window.innerHeight;
	    else if ((document.body) && (document.body.clientHeight))
	        winHeight = document.body.clientHeight;
	    if(document.documentElement && document.documentElement.clientHeight)
	    	 winHeight = document.documentElement.clientHeight;
	    $('.right-fix-cart').css('margin-top',winHeight/4+'px');
	};
	autoheight();
	window.onresize=autoheight;
	
//电梯
	$(window).scroll(function() {
		var top1 = $(window).scrollTop();
		if(top1 > $('.color-type-pink').offset().top) {
			$('.elevator2').css('display', 'block');
			$('.fix-search').addClass('show');
		} else {
			$('.elevator2').css('display', 'none');
			$('.fix-search').removeClass('show');
		};
	});
	$('#elevator2_top').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 'slow');
	});
})