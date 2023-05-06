document.addEventListener("DOMContentLoaded", () => {
   addLangActive('.lang', 'active');
   addLangActive('.navbar__menu__language .lang', 'active');
   openMenu('.hamburger', '.navbar__menu', 'active');
   openSelectMenu('.evenets__top__filter', '.evenets__top__filter .evenets__top__filter__sub', 'active');
   changeSelectMenu('evenets__top__filter__sub__element', '.evenets__top__filter>span');
   filterEvents('.events__slide', '.evenets__top__filter__sub__element');
   openModal('events__slide__button', '.modal__overlay', '.modal__box__exit', 'active');
   sendMail('.modal__box form', '.success__box', '.modal__box', '.loading__box', 'passive');
   closeModal('.modal__overlay', '.success__box__exit', 'active', '.modal__box', '.success__box', 'passive');
});

function closeModal(overlaySelector, exitSelector, activeClass, modalSelector, successSelector, passiveClass) {
   const overlay = document.querySelector(overlaySelector),
         exit = document.querySelector(exitSelector),
         modalBox = document.querySelector(modalSelector),
         successBox = document.querySelector(successSelector);


         exit.addEventListener('click', () => {
          overlay.classList.remove(activeClass);
          modalBox.classList.remove(passiveClass);
          successBox.classList.add(passiveClass)
         })
}

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







 





 function initSlickCarusel(caruselClass, slickParameters, responsiveParameters, rightButton, leftButton) {
    $(caruselClass).slick({
      ...slickParameters,
      responsive: responsiveParameters
    })

    $(rightButton).click(function(){
      $(caruselClass).slick('slickNext');
    });

    $(leftButton).click(function(){
      $(caruselClass).slick('slickPrev');
    });
 }

 initSlickCarusel('.events__carusel', {
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: false,
 }, 
 [
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
 '.events__slider__right',
 'events__slider__left')

 initSlickCarusel('.photos__carusel', {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
}, 
[
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 1,
    },
  },
  
],
'.photos__carusel__right',
'photos__carusel__left')

initSlickCarusel('.videos__carusel', {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
}, 
[
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
'.videos__carusel__right',
'videos__carusel__left')

initSlickCarusel('.partners__carusel', {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
}, 
[
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
'.partners__carusel__right',
'partners__carusel__left')




















 function openSelectMenu(selectSelection, subMenuSelection, activeClass) {
   const select = document.querySelector(selectSelection),
         subMenu = document.querySelector(subMenuSelection);
   select.addEventListener("click", () => {
      select.classList.toggle(activeClass);
      subMenu.classList.toggle(activeClass);
   })
 }




 function maskPhone(input) {
  $(input).mask("(+999)99 999 99 99");
 }



 maskPhone('#phone');



 function openModal(eventOpenBtn, modalSelector, exitSelector, activeClass) {
    const modal = document.querySelector(modalSelector),
          exit = document.querySelector(exitSelector);

    document.addEventListener("click",  (e) => {
      if(e.target.classList.contains(eventOpenBtn)) {
        modal.classList.add(activeClass);
      }
    });
    exit.addEventListener("click",  (e) => {
        modal.classList.remove(activeClass);
    });
 }




 function sendMail(formSelector, successSelector, modalSelector, loadingSelector, passiveClass) {
    const form = document.querySelector(formSelector),
          success = document.querySelector(successSelector),
          modalBox = document.querySelector(modalSelector);
          loadingBox = document.querySelector(loadingSelector);
          
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!checkInputs(`${formSelector} input`)) {
              alert('Please fill out all fields.');
              return;
            }
   
           
            modalBox.classList.add(passiveClass);
            loadingBox.classList.remove(passiveClass);
            setTimeout(() => {
              loadingBox.classList.add(passiveClass);
              success.classList.remove(passiveClass);
            }, 3000)
          })
 }



 function checkInputs(inputsSelectors) {
    const inputs = document.querySelectorAll(inputsSelectors);
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        return false;
      }
    }
    return true;
}


