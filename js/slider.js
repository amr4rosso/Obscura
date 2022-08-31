const slider = $('.feedback__list').bxSlider({
	pager: false,
	Controls: false,
	infiniteLoop: true,
	touchEnabled: true,
	hideControlContent: false,
});

$(".feedback__button--prev").click((e) => {
	e.preventDefault();
	slider.goToPrevSlide();
});

$(".feedback__button--next").click((e) => {
	e.preventDefault();
	slider.goToNextSlide();
});

const portfolio = $('.portfolio__list').bxSlider({
	pager: false,
	Controls: false,
	infiniteLoop: true,
	touchEnabled: true,
	hideControlContent: false,
});

$(".button--portfolio-prev").click((e) => {
	e.preventDefault();
	portfolio.goToPrevSlide();
});

$(".button--portfolio-next").click((e) => {
	e.preventDefault();
	portfolio.goToNextSlide();
});