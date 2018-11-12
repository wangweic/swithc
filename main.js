let $slides = $("#slides");
let $images = $slides.children('img');
let current = 0;

$slides.css({
	transform: 'translateX(-920px)'
});

makeFakeSlides();
setInterval(function() {
	goTo(current + 1);
},1500)

function goTo(index) {
	if (index > $images.length - 1) {
		index = 0;
	}
	if(current === $images.length - 1 && index === 0) {
		$slides.css({
			transform: `translateX(${ - ($images.length + 1) * 920 }px)`
		}).one(`transitionend`, function() {
			$slides.hide().offset()
			$slides.css({
				transform: `translateX(${ - (index + 1) * 920 }px)`
			}).show();
		})
	} else if(current === 0 && index === $images.length - 1) {
		$slides.css({
			transform: `translateX(0px)`
		}).one(`transitionend`, function() {
			$slides.hide().offset()
			$slides.css({
				transform: `translateX(${ - (index + 1) * 920 }px)`
			}).show();
		})
	} else {
		$slides.css({
			transform: `translateX(${ - (index + 1) * 920 }px)`
		})
	}
	current = index;
}

function makeFakeSlides() {
	let $firstCopy = $images.eq(0).clone(true);
	let $lastCopy = $images.eq($images.length - 1).clone(true);

	$slides.append($firstCopy);
	$slides.prepend($lastCopy);
}