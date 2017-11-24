$(function() {

	//Menu btn
	$('.nav_icon').click(function(){
		$(this).toggleClass('open');
		});
	$('.nav_item a').click(function () {
		$('.top_menu').removeClass('active');
		$('.nav_icon').removeClass('open');
	}).append('<span>');
	$(".toggle_menu").click(function () {
		if($(".top_menu").is(":visible")){
			$('.top_menu').removeClass('active');
			$('.top_menu li a').removeClass('fadeInUp animated');
		} else {
			$('.top_menu').addClass('active');
			$('.top_menu li a').addClass('fadeInUp animated');
		}
		$('.top_menu').click(function () {
			$(this).removeClass('active');
			$('.nav_icon').removeClass('open');
		});
	});
});
