const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const iconEl = searchEl.querySelector('.material-icons');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const spyEls = document.querySelectorAll('section.scroll-spy');
const thisYear = document.querySelector('.this-year');
const toTopEl =document.querySelector('#to-top');

let isHidePromotion = false;

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {
    // hide badge

    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    })

    gsap.to(toTopEl, 0.2, {
      x : 0 
    })

  } else {
    // display badge
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    })

    gsap.to(toTopEl, 0.2, {
      x : 100
    })
  }
}, 300));

// -.throttle(function, time);

fadeEls.forEach( (fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
})


// SWIPER

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});


new Swiper('.notice .promotion .swiper-container', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay : 5000
  },
  pagination : {
    el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable : true,
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay : true,
  loop: true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
})

promotionToggleBtn.addEventListener('click', ()=>{
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion){ // 숨김처리
   promotionEl.classList.add('hide');
  }else { // 보여주세요
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){ 
  //gsap.to(요소, 시간, 옵션(객체데이터));
  gsap.to(
    selector,
    random(1.5, 2.5), 
    {
      y :size,
      repeat : -1,
      yoyo : true,
      ease : Power1.easeInOut, // gsap easing 검색 
      delay : random(0, delay)
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook : 0.8, // 뷰포트 시작 0 끝 1 여기 걸리면 setClassToggle 실행하는 거임
    }) // Scene = 특정 요소 감시 옵션 지정 메서드
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});

thisYear.textContent = new Date().getFullYear();

toTopEl.addEventListener('click', ()=>{
  gsap.to(window, .7 , {
    scrollTo : 0
  })
});