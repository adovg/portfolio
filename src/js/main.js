
$(document).ready(function () {
	console.log('document ready');
	
	$('.works__btn button, .works__btn a').on('focus', function() {
		 $(this).parents('.works__element').addClass('works__element--active');
	});

	$('.works__btn button, .works__btn a').on('blur', function(e) {
		$(this).parents('.works__element').removeClass('works__element--active');
	});

	function moveProgressBar(node, nodeLine, tooltip, animationLength = 600) {
		const progressElement = $(node);
		progressElement.each(function (value, item) {
			$(item).find(nodeLine).animate({
				width: item.dataset.progressPercent+'%'
			}, animationLength);
			$(item).find(tooltip).show(animationLength);
		})
	};

	
	let animate = true;

$(window).scroll(function () {

	if ($('.skills').offset().top <= $(window).scrollTop() + 100 ) {
		if (animate) {
		moveProgressBar('.progress__element', '.progress__line', '.progess__tooltip');
		 }
		 animate = false;
 }
});

// jQuery(function($){ ...your code... });

$('.carousel').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	dots:false,
	navText: [],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
		},
		980:{
            items:5
        }
    }
})


});
