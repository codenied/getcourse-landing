// BURGER MENU
const burger = document.querySelector('.burger')

burger?.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('menu-open')
})


// EXPANDS
const expandButtons = document.querySelectorAll('.expand-action')
const accordions = document.querySelectorAll('.accordion')

expandButtons.forEach(it => {
  it?.addEventListener('click', () => {
    const parent = it?.parentNode

    parent.classList.toggle('expanded')
  })
})

accordions.forEach(it => {
  it?.addEventListener('click', () => {
    const parent = it?.parentNode

    parent.classList.toggle('expanded')
  })
})



// TESTIMONIALS
const testimonialsNav = document.querySelectorAll('.testimonials-nav-item')
testimonialsNav.forEach(it => {
  it?.addEventListener('click', () => {
    const lastNavActive = document.querySelector('.testimonials-nav-item.active')

    lastNavActive?.classList.remove('active')

    it.classList.toggle('active')
  })
})


// SLIDERS
$('.author-preview-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});
