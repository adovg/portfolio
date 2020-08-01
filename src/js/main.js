
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


  let ready = () => {

	let delay = () => {
		let preloaderEl = document.getElementById('preloader');
	 preloaderEl =  preloaderEl.classList.toggle('hidden');
	 };
	 setTimeout(delay, 1000);
  };


  document.addEventListener("DOMContentLoaded", ready);


  //////////////////////////////////////////////////////////slider

  var multiItemSlider = (function () {
	return function (selector) {
	  var
		_mainElement = document.querySelector(selector), // основный элемент блока
		_sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
		_sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
		_sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
		_sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
		_sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
		_wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
		_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
		_positionLeftItem = 0, // позиция левого активного элемента
		_transform = 0, // значение трансформации .slider_wrapper
		_step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
		_items = []; // массив элементов
		
	  // наполнение массива _items
	  _sliderItems.forEach(function (item, index) {
		_items.push({ item: item, position: index, transform: 0 });
	  });
  
	  var position = {
		getMin: 0,
		getMax: _items.length - 1,
	  }
  
	  var _transformItem = function (direction) {
		if (direction === 'right') {
		  if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
			return;
		  }
		  if (!_sliderControlLeft.classList.contains('slider__control_show')) {
			_sliderControlLeft.classList.add('slider__control_show');
		  }
		  if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
			_sliderControlRight.classList.remove('slider__control_show');
		  }
		  _positionLeftItem++;
		  _transform -= _step;
		}
		if (direction === 'left') {
		  if (_positionLeftItem <= position.getMin) {
			return;
		  }
		  if (!_sliderControlRight.classList.contains('slider__control_show')) {
			_sliderControlRight.classList.add('slider__control_show');
		  }
		  if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
			_sliderControlLeft.classList.remove('slider__control_show');
		  }
		  _positionLeftItem--;
		  _transform += _step;
		}
		_sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
	  }
  
	  // обработчик события click для кнопок "назад" и "вперед"
	  var _controlClick = function (e) {
		if (e.target.classList.contains('slider__control')) {
		  e.preventDefault();
		  var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
		  _transformItem(direction);
		}
	  };
  
	  var _setUpListeners = function () {
		// добавление к кнопкам "назад" и "вперед" обработчика _controlClick для события click
		_sliderControls.forEach(function (item) {
		  item.addEventListener('click', _controlClick);
		});
	  }
  
	  // инициализация
	  _setUpListeners();
  
	  return {
		right: function () { // метод right
		  _transformItem('right');
		},
		left: function () { // метод left
		  _transformItem('left');
		}
	  }
  
	}
  }());
  var slider = multiItemSlider('.slider');