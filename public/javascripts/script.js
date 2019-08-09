// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   myIndex++;
//   if(myIndex > slides.length) {
// 	  myIndex = 1;
//   } 
//   slides[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 5000); // Change image every 3 seconds
// }



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

