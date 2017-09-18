$(document).ready(function($) {

	var navHidden = $('.nav__hidden');

	$('.nav__visible li:nth-of-type(1) a').click(function() {
		$(this).removeAttr('href');
		var li = $(this).parents('li');
		li.toggleClass('selected');
		navHidden.slideToggle(0);
	});


	$('.slider__list').slick({
		appendArrows: $('.slider__arrows .container'),
		dots: true
	});
	$('.reviews__list').slick({
		slidesToShow: 4
	});
	$('.opinions__list').slick();


	$('.questions__link a').click(function(event) {
		event.preventDefault();
		$('.questions__hidden').toggle(0);
	});

	$('.contacts__map frame').contents().find('.leaflet-popup').hide();


	$('.expert__list').slick({
		slidesToShow: 2
	});

	var popupCouresDesc = $('#popup-coures .popup__desc'),
		popupCouresInput = $('#popup-coures .input_hidden');
	$('.programs__item').click(function(event) {
		var count = $(this).find('.programs__count').text(),
			title = $(this).find('.programs__subtitle').text();
		popupCouresDesc.html(title+', '+count);
		popupCouresInput.val(title);
	});

	function servicesFiler() {
		$('.services-filter__nav li').each(function() {
			var attr = $(this).attr('data-filter-nav');
			if ($(this).hasClass('selected')) {

				$('.services-filter__item').css('display', 'none');
				$('.services-filter__item.filter-'+attr).css('display', 'inline-block');

			}
		});
	}
	servicesFiler();
	$('.services-filter__nav li').click(function() {
		if (!$(this).hasClass('selected')) {
			$('.services-filter__nav li').each(function() {
				$(this).removeClass('selected')
			});
			$(this).addClass('selected');
			servicesFiler();
		}
	});
	
}); 