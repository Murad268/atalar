document.addEventListener("DOMContentLoaded", () => {
   addLangActive('.lang', 'active');
   addLangActive('.navbar__menu__language .lang', 'active');
   openMenu('.hamburger', '.navbar__menu', 'active');
   openSelectMenu('.evenets__top__filter', '.evenets__top__filter .evenets__top__filter__sub', 'active');
   changeSelectMenu('evenets__top__filter__sub__element', '.evenets__top__filter>span');
   filterEvents('.events__slide', '.evenets__top__filter__sub__element');
});


function filterEvents(slideSelector, spanSelector) {
   const slides = document.querySelectorAll(slideSelector),
         spans = document.querySelectorAll(spanSelector);

   spans.forEach(span => {
     span.addEventListener('click', () => {
      const id = span.getAttribute('data-city-code')
      
      slides.forEach(slide => {
         slide.style.display = 'none';
         if(slide.getAttribute('data-city') == id) {
            slide.style.display = 'block';
         }
      })
      if(id ==  0) {
         slides.forEach(slide => {
            slide.style.display = 'block';
         })
      }
     })
   })
}


function changeSelectMenu(selectSubMenuElement, spanSelector) {
   const span = document.querySelector(spanSelector);
   document.addEventListener('click', (e) => {
      if(e.target.classList.contains(selectSubMenuElement)) {
         span.textContent = e.target.textContent;
      }
   })
}

function addLangActive(triggersSelectors, activeClass) {
   const triggers = document.querySelectorAll(triggersSelectors);
   triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
         triggers.forEach(trigger => {
            trigger.classList.remove(activeClass)
         })
         e.target.classList.add(activeClass)
      })
   })
};


function openMenu(triggerSelector, menuSelector, activeClass) {
   const trigger = document.querySelector(triggerSelector),
         menu = document.querySelector(menuSelector);
         
   trigger.addEventListener('click', () => {
      trigger.classList.toggle(activeClass);
      menu.classList.toggle(activeClass);
   })
}





$('.events__carusel').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: false,

   responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
         breakpoint: 900,
         settings: {
           slidesToShow: 2,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
           dots: true
         },
       }
    ],
 });

 $('.events__slider__right').click(function(){
   $('.events__carusel').slick('slickNext');
 });

 $('.events__slider__left').click(function(){
   $('.events__carusel').slick('slickPrev');
 });

 

 $('.photos__carusel').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: false,
   responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],

 });

 $('.photos__carusel__right').click(function(){
   $('.photos__carusel').slick('slickNext');
 });

 $('.photos__carusel__left').click(function(){
   $('.photos__carusel').slick('slickPrev');
 });



 $('.videos__carusel').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: false,
   responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2
        },
      },
      {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
           dots: true
         },
       }
    ],

 });

 $('.videos__carusel__right').click(function(){
   $('.videos__carusel').slick('slickNext');
 });

 $('.videos__carusel__left').click(function(){
   $('.videos__carusel').slick('slickPrev');
 });


 $('.partners__carusel').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: false,
   responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        },
      },
      {
         breakpoint: 700,
         settings: {
           slidesToShow: 2
         },
       },
       {
         breakpoint: 450,
         settings: {
           slidesToShow: 1,
           dots: true
         },
       }
    ],

 });
 $('.partners__carusel__right').click(function(){
   $('.partners__carusel').slick('slickNext');
 });

 $('.partners__carusel__left').click(function(){
   $('.partners__carusel').slick('slickPrev');
 });

 function openSelectMenu(selectSelection, subMenuSelection, activeClass) {
   const select = document.querySelector(selectSelection),
         subMenu = document.querySelector(subMenuSelection);
   select.addEventListener("click", () => {
      select.classList.toggle(activeClass);
      subMenu.classList.toggle(activeClass);
   })
 }