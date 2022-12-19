// ----------- navbar toggle menu

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})

// ------------SWIPER JS SLIDER

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
        },
       loop:true,
       autoplay:{
           delay:1200,
        disableOnInteraction:false,
       }
      });

// ----------- owl card slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    nav:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// -------------Isotope filter gallery

$(document).ready(function(){

   $('.list').click(function(){
      
    const value = $(this).attr('data-filter');
    if(value == 'all'){
        $('.item-gallery').show('1700');

    }
    else{
        $('.item-gallery').not('.'+value).hide('1700');
        $('.item-gallery').filter('.'+value).show('1700');

    }
     $('.list').click(function(){

        $(this).addClass('.active').siblings().removeClass('active');
     })
   })

})

// ----------preloader

function counter(){

var count = setInterval(function(){

 var c = parseInt($('.counter').text());
$('.counter').text((++c).toString());
if ( c == 100){
    clearInterval(count);
$('.counter').addClass('hide')
    $('.preloader').addClass('active')
}

},60)

}
counter()


















