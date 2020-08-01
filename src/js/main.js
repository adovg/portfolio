// window.onload = function () {
// 	console.log('dom ready!');
//   };
  
//   if (window.onload) {
// 	let preloaderEl = document.getElementById('preloader');
// 	preloaderEl =  preloaderEl.classList.toggle('hidden');
//   }
  

$(document).ready(function () {
	
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


});








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












var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  

  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
  };




//   if (window.onload) {
// 	console.log('DOM готов');
// 	let delay = () => {
// 	   let preloaderEl = document.getElementById('preloader');
// 	preloaderEl =  preloaderEl.classList.toggle('hidden');
// 	};
// 	setTimeout(delay, 1000);
//   }

  let ready = () => {
	// console.log('DOM готов');
	// let preloaderEl = document.getElementById('preloader');
	//  preloaderEl =  preloaderEl.classList.toggle('hidden');

	let delay = () => {
		let preloaderEl = document.getElementById('preloader');
	 preloaderEl =  preloaderEl.classList.toggle('hidden');
	 };
	 setTimeout(delay, 1000);
  };


  document.addEventListener("DOMContentLoaded", ready);