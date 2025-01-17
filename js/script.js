$(document).ready(function () {
	$('.hamburger').on('click', function () {
		$('.mobile-menu').addClass('is-active');
	});

	$('.mobile-menu-close').on('click', function () {
		$('.mobile-menu').removeClass('is-active');
	});

	$('.header-bottom-btn').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		removalDelay: 700,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
		},
	});

	$('.mfp-close-custom').on('click', function () {
		$.magnificPopup.close();
	});
});

// Reviews Swiper START
const reviewsSwiper = new Swiper('.reviews-swiper', {
	slidePerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.reviews-swiper .swiper-button-next',
		prevEl: '.reviews-swiper .swiper-button-prev',
	},
	speed: 1000,
});
// Reviews Swiper END
