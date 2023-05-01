function getRealWidth(element) {
	const marginLeft = parseFloat(window.getComputedStyle(element).marginLeft);
	const marginRight = parseFloat(window.getComputedStyle(element).marginRight);

	const paddingLeft = parseFloat(window.getComputedStyle(element).paddingLeft);
	const paddingRight = parseFloat(window.getComputedStyle(element).paddingRight);

	return element.getBoundingClientRect().width + marginLeft + marginRight + paddingLeft + paddingRight;
}

function scrollCarousel(carousel, direction) {
	carousel.indicators[carousel.index].classList.toggle("active", false);
	carousel.index += direction;

	// Fix the index overflow
	if (direction === -1 && carousel.index === -1) carousel.index = carousel.slideLength - 1;
	if (carousel.index === carousel.slideLength) carousel.index = 0;

	// Translate
	if (carousel.index === carousel.slideLength - 1) carousel.wrapper.style.transform = `translate(-${carousel.slideMax}%, 0)`;
	else carousel.wrapper.style.transform = `translate(-${carousel.slideWidth * carousel.index}%, 0)`;
	carousel.indicators[carousel.index].classList.toggle("active", true);
}

const carousels = document.querySelectorAll(".carousel");
for (const carousel of carousels) {
	carousel.index = 0;
	carousel.clicked = false;

	// Get elements
	carousel.wrapper = carousel.querySelector(".wrapper");
	carousel.indicators = carousel.querySelectorAll(".indicators div");
	carousel.indicators[0].classList.toggle("active", true);

	const carouselWidth = carousel.getBoundingClientRect().width;
	const wrapperWidth = carousel.wrapper.getBoundingClientRect().width;

	// Calculate children values
	const child = carousel.wrapper.childNodes[0];
	const childWidth = child.getBoundingClientRect().width;
	const childRealWidth = getRealWidth(child);
	const childWidthDiff = childRealWidth - childWidth; // Difference between element with & without padding
	const childrenOnScreen = Math.round(carouselWidth / childRealWidth); // How many children are on display

	// Calculate total items & how many slides
	carousel.length = carousel.indicators.length;
	carousel.slideLength = (carousel.indicators.length - childrenOnScreen) + 1;

	// Disable extra slides
	for (let i = carousel.slideLength; i < carousel.indicators.length; i++) {
		carousel.indicators[i].style.display = "none";
	}

	carousel.querySelector(".controls").style.opacity = 1;

	// Calculate slide width variables
	carousel.slideWidth = 100 / carousel.length;
	carousel.slideMax = (((wrapperWidth - carouselWidth - childWidthDiff) / wrapperWidth)) * 100;

	// Add button listeners
	const buttons = carousel.querySelectorAll(".buttons > div");
	for (const button of buttons) {
		button.addEventListener("click", function (carousel) {
			carousel.clicked = true; // Mark the carousel as user clicked

			const isLeft = this.classList.contains("left");
			const direction = isLeft ? -1 : 1;

			scrollCarousel(carousel, direction);

		}.bind(button, carousel));
	}

	// Idle interval
	carousel.interval = setInterval(function (carousel) {
		if (!carousel.clicked) scrollCarousel(carousel, 1);
		else clearInterval(carousel.interval);
	}.bind(null, carousel), 5000);
}