

(() =>{
 
     const openNavMenu = document.querySelector(".open-nav-menu"),
     closeNavMenu = document.querySelector(".close-nav-menu"),
     navMenu = document.querySelector(".nav-menu"),
     menuOverlay = document.querySelector(".menu-overlay"),
     mediaSize = 991;
   
     openNavMenu.addEventListener("click", toggleNav);
     closeNavMenu.addEventListener("click", toggleNav);
     // close the navMenu by clicking outside
     menuOverlay.addEventListener("click", toggleNav);
   
     function toggleNav() {
          navMenu.classList.toggle("open");
          menuOverlay.classList.toggle("active");
          document.body.classList.toggle("hidden-scrolling");
     }
   
     navMenu.addEventListener("click", (event) =>{
         if(event.target.hasAttribute("data-toggle") && 
              window.innerWidth <= mediaSize){
              // prevent default anchor click behavior
              event.preventDefault();
              const menuItemHasChildren = event.target.parentElement;
           // if menuItemHasChildren is already expanded, collapse it
           if(menuItemHasChildren.classList.contains("active")){
                collapseSubMenu();
           }
           else{
             // collapse existing expanded menuItemHasChildren
             if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
             }
             // expand new menuItemHasChildren
             menuItemHasChildren.classList.add("active");
             const subMenu = menuItemHasChildren.querySelector(".sub-menu");
             subMenu.style.maxHeight = subMenu.scrollHeight + "px";
           }
         }
     });
     function collapseSubMenu(){
          navMenu.querySelector(".menu-item-has-children.active .sub-menu")
          .removeAttribute("style");
          navMenu.querySelector(".menu-item-has-children.active")
          .classList.remove("active");
     }
     function resizeFix(){
           // if navMenu is open ,close it
           if(navMenu.classList.contains("open")){
                toggleNav();
           }
           // if menuItemHasChildren is expanded , collapse it
           if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
        }
     }
   
     window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
             resizeFix();
        }
     });
   
   })();

   

//    sticky header add 
let header = document.querySelector('.headerWarp');
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 200){
        header.classList.add("sticky_header")
    }
    else{
        header.classList.remove("sticky_header")
    }
})

// Banner slider animation 
const swiperQuiz = new Swiper(".animeslide", {
     // Optional parameters
     effect: "fade",
     loop: true,
     speed: 900,
     centeredSlides: true,
     pagination: {
       el: ".animeslide-pagination",
       type: "custom",
       renderCustom: function (swiper, current, total) {
         let indT = total >= 5 ? total : `${total}`;
         let indC = current >= 5 ? current : `${current}`;
         return `<b>${indC}</b><span>/</span>${indT}`;
       }
     },
     navigation: {
       nextEl: ".animeslide-button-next",
       prevEl: ".animeslide-button-prev"
     },
     scrollbar: {
       el: ".animeslide-scrollbar",
       draggable: true
     },
     keyboard: {
       enabled: true,
       onlyInViewport: false
     },
     runCallbacksOnInit: true
   });

   $('.our_tour_slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    mouseDrag: true,
    autoplay: true,
    // animateOut: 'slideOutUp',
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    responsive: {
         0: {
              items: 1,
              nav: false,
              autoplay: true,
            
         },
         600: {
              items: 2.5,
              nav: false,
              autoplay: true,
         },
         1000: {
              items: 4
         }
    }
});

$('.testi_slider').owlCarousel({
     loop: true,
     margin: 30,
     dots: false,
     nav: true,
     mouseDrag: true,
     autoplay: true,
     navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
     autoplayTimeout: 4000,
     autoplaySpeed: 2000,
     responsive: {
          0: {
               items: 1,
               nav: true,
               autoplay: true,
          },
          600: {
               items: 1,
               nav: true,
               autoplay: true,
          },
          1000: {
               items: 1
          }
     }
});

$('.blog_slider').owlCarousel({
     loop: true,
     margin: 0,
     dots: false,
     nav: true,
     mouseDrag: true,
     autoplay: true,
     // animateOut: 'slideOutUp',
     navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
     autoplayTimeout: 4000,
     autoplaySpeed: 2000,
     responsive: {
          0: {
               items: 1,
               nav: false,
               autoplay: true,
             
          },
          600: {
               items: 2.5,
               nav: false,
               autoplay: true,
          },
          1000: {
               items: 3
          }
     }
 });


// counter up 

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// stepform js 

$('.rec_box').on("click", function () {
     $(this).toggleClass('ad_color');
 });
//jQuery time
$(document).ready(function(){
     var current = 1;
        
        widget      = $(".step");
        btnnext     = $(".next");
        btnback     = $(".back"); 
        btnsubmit   = $(".submit");
   
        widget.not(':eq(0)').hide();
        hideButtons(current);
        setProgress(current);
   
        btnnext.click(function(){
            if(current < widget.length) { 			
               widget.show(); 			
               widget.not(':eq('+(current++)+')').hide();
                  setProgress(current);
           } 		
          hideButtons(current); 	
      });
           
     btnback.click(function(){ 		
         if(current > 1){
                 current = current - 2;
                 btnnext.trigger('click');
            }
           hideButtons(current);
       });		
   });
   
   setProgress = function(currstep){
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        $(".progress-bar")
           .css("width",percent+"%")
           .html(percent+"%");		
   }
   
   hideButtons = function(current){
        var limit = parseInt(widget.length); 
   
        $(".action").hide();
   
        if(current < limit) btnnext.show(); 	
     if(current > 1) btnback.show();
        if(current == limit) { btnnext.hide(); btnsubmit.show(); }
   }