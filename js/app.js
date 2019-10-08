jQuery(document).ready(function() {
//	jQuery('.main-banner').addClass('hidden').viewportChecker({
//		classToAdd: 'visible animated fadeIn',
//		offset: 300
//	});
	$('.hoverimg').hover(function(){
		$(this).addClass('flip');
		}, function(){
		$(this).removeClass('flip');
	});

	jQuery('.why-choose').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 200
	});

	jQuery('.best-feature').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 200
	});

	jQuery('.works-and-creative').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 200
	});

	jQuery('.gallery').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 300
	});

	jQuery('.our-team').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 200
	});

	jQuery('.quick-action').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 200
	});

	jQuery('.footer').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 200
	});
});