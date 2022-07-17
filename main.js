const mySwiper = new Swiper('#banner .swiper-container',{

    loop: true,
    autoplay: true
  });

  const mySwiper1 = new Swiper('#showcase .swiper-container',{

    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        640:{
            slidesPerView: 1,
            spaceBetween: 30
        },
        991:{
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440:{
            slidesPerView: 4,
            spaceBetween: 30
        }
    } 
   
  });
  const mySwiper2 = new Swiper('#listing .swiper-container',{

    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        640:{
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1440:{
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
  });
  