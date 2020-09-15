$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');
	});

		

		$('.menu__link-about').click(function(event) {
		$('.menu__link-about').addClass('active');
		$('.menu__link-services').removeClass('active');
		$('.menu__link-vacancies').removeClass('active');
		$('.menu__link-news').removeClass('active');
		$('.menu__link-agree').removeClass('active');
	});

		$('.menu__link-services').click(function(event) {
		$('.menu__link-about').removeClass('active');
		$('.menu__link-services').addClass('active');
		$('.menu__link-vacancies').removeClass('active');
		$('.menu__link-news').removeClass('active');
		$('.menu__link-agree').removeClass('active');
	});

		$('.menu__link-vacancies').click(function(event) {
		$('.menu__link-about').removeClass('active');
		$('.menu__link-services').removeClass('active');
		$('.menu__link-vacancies').addClass('active');
		$('.menu__link-news').removeClass('active');
		$('.menu__link-agree').removeClass('active');
	});

		$('.menu__link-news').click(function(event) {
		$('.menu__link-about').removeClass('active');
		$('.menu__link-services').removeClass('active');
		$('.menu__link-vacancies').removeClass('active');
		$('.menu__link-news').addClass('active');
		$('.menu__link-agree').removeClass('active');
	});

		$('.menu__link-agree').click(function(event) {
		$('.menu__link-about').removeClass('active');
		$('.menu__link-services').removeClass('active');
		$('.menu__link-vacancies').removeClass('active');
		$('.menu__link-news').removeClass('active');
		$('.menu__link-agree').addClass('active');
	});
});