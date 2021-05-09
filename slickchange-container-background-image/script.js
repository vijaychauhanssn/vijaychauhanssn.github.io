
const setBgImage = (ele) => {
  if (ele.data("background")) {
    ele.closest(".slider-container").css("background", ele.data("background"));
  }
};
$(".slider1")
  .on("init", (slick) => {
    setBgImage($(slick.target).find(".slick-active"));
  })
  .slick({
	  autoplay:true,
  })
  .on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    setBgImage(slick.$slider.find(`[data-slick-index=${nextSlide}]`));
  });
  
  const setColor = (ele) => {
  if (ele.data("color")) {
    ele.closest(".slider-container").css("background-color", ele.data("color"));
  }
};

$(".slider2")
  .on("init", (slick) => {
    setColor($(slick.target).find(".slick-active"));
  })
  .slick({
	  autoplay:true
  })
  .on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    setColor(slick.$slider.find(`[data-slick-index=${nextSlide}]`));
  });
