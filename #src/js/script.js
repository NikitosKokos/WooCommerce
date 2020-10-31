
document.addEventListener('DOMContentLoaded', () => {
    // @ @include("swiper-bundle.min.js");
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

});