const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const iconEl = searchEl.querySelector('.material-icons');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');

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
