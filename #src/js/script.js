
document.addEventListener('DOMContentLoaded', () => {
    // @@include("swiper-bundle.min.js");
    // @@include("some.js");
    // @@include('burger.js');
    // @ @include("spoller.js",{});
    // @ @include("select.js",{});
    // @ @include("tabs.js",{});
    const header = document.querySelector('.header');
    window.addEventListener('scroll',() => {
        if(window.pageYOffset > 0){
            header.classList.add('header_active');
        }else{
            header.classList.toggle('header_active');
        }
      });
      if(window.pageYOffset > 0){
        header.classList.add('header_active');
        }else{
            header.classList.toggle('header_active');
        }


        // slider slider-reviews
         if(document.querySelector('.reviews')){
        const productsSlider = new Swiper('.slider-reviews', {     
                slidesPerView: 1,
                simulateTouch:false,
                // loop: true,
                effect: 'fade',
                // autoHeight: true,
                slideClass: 'slider-reviews__slide',
                // pagination: {
                //   el: '.products-slider__info',
                //   type: 'fraction'
                // },
                navigation: {
                    nextEl: '.pagination-reviews__btn_next',
                    prevEl: '.pagination-reviews__btn_prev',
                  },
            })
       }
});