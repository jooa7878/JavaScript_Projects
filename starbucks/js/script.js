const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const iconEl = searchEl.querySelector('.material-icons');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
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
  console.log('scroll');
  if (window.scrollY > 500) {
    // hide badge

    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    })

  } else {
    // display badge
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
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
  direction : 'vertical',
  autoplay : true,
  loop : true,
  clickable : true
}); // 생성자 (클래스)


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

promotionToggleBtn.addEventListener('click', ()=>{
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion){ // 숨김처리
   promotionEl.classList.add('hide');
  }else { // 보여주세요
    promotionEl.classList.remove('hide');
  }
});