const menuToggle = document.querySelector('#menu-toggle')
const nav = document.querySelector('#options-nav')
const close = document.querySelector('#close')

menuToggle.addEventListener('click', () => {
  nav.classList.add('on')
  close.classList.add('on')
  menuToggle.classList.add('on')
})

close.addEventListener('click', () => {
  nav.classList.remove('on')
  close.classList.remove('on')
  menuToggle.classList.remove('on')
})
