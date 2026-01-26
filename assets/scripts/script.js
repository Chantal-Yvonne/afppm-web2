// NAVIGATION
  let btn = document.getElementById('hamburgerBtn');
  let menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeBtn');

  btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    navbar.classList.toggle('menu-open');
    
  });

  // Close menu 
  document.getElementById("closeMenu").addEventListener("click", () => { 
    document.getElementById("mobileMenu").classList.add("hidden"); 
  });
  

  // Close menu when any link is clicked
  let menuLinks = menu.querySelectorAll('a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      menu.classList.add('hidden');
    });
  }

  // Sliders
  
$('.slider').slick({
  slidesToShow: 3,       // 3 slides per row
  slidesToScroll: 3,
  arrows: false,
  dots: false,
  infinite: true,
  autoplay:true,
  autoplaySpeed: 2500,
  

  responsive: [
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
  ]
});


  // $('.custom-prev').click(function() {
  //   $('.slider').slick('slickPrev');
  // });
  
  $('.custom-next').click(function() {
    $('.slider').slick('slickNext');
  });

//   $('.slider').on('afterChange', function(event, slick, currentSlide){
//   if (currentSlide > 0) {
//     $('.custom-prev').fadeIn();   // show when not on the first slide
//   } else {
//     $('.custom-prev').fadeOut();  // hide again when back at the first slide
//   }
// });


// ========== FAQ ACCORDION ==========
  
$(".faq-title").click(function () {
  $(this).parent().toggleClass("open");
});


// VIDEO
document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('video');

  if (video) {
    video.load();
  }
});

// Back to top btn
const backToTop = document.getElementById("backToTop");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
  if (window.scrollY + window.innerHeight >= footer.offsetTop) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
