const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const iconEl = searchEl.querySelector('.material-icons');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', ()=>{
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})