



$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
    loop:true,
	animateOut: 'slideOutLeft',
    animateIn: 'fadeInUp',
	smartSpeed:450,
	dots: false,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	autoHeight:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,
         
            loop:true
        }
    }
})
});

