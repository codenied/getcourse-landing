// BURGER MENU
const burgerTop = document.querySelector('.burger-top')
const burgerBottom = document.querySelector('.burger-bottom')

burgerTop?.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('menu-top-open')
})

burgerBottom?.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('menu-bottom-open')
})



// EXPANDS
const expandButtons = document.querySelectorAll('.expand-action')
const accordions = document.querySelectorAll('.accordion')

expandButtons.forEach(it => {
  it?.addEventListener('click', () => {
    const parent = it?.parentNode
    const textContainer = it?.querySelector('span')

    parent.classList.toggle('expanded')

    if (parent.className.includes('expanded')) {
      textContainer.innerHTML = 'Свернуть:'
    } else {
      textContainer.innerHTML = 'Показать еще:'
    }
  })
})

accordions.forEach(it => {
  it?.addEventListener('click', () => {
    const parent = it?.parentNode

    parent.classList.toggle('expanded')
  })
})


// SCROLL TO TOP
const scrollToTop = document.querySelector('.scroll-to-top')


// MODALS
const body = document.querySelector('body')

function closeModal(modal, className) {
  modal.querySelector('.modal-cover')?.addEventListener('click', () => {
    body?.classList.remove(className)
  })

  modal.querySelector('.modal-close-btn')?.addEventListener('click', () => {
    body?.classList.remove(className)
  })
}

const compareButton = document.querySelector('.compare-price')
const compareModal = document.querySelector('.compare-price-modal')
const authorBaseModal = document.querySelector('.author-base-modal')
const authorBaseButton = document.querySelector('.video-preview-action')

authorBaseButton.addEventListener('click', () => {
  body?.classList.add('author-base-modal-opened')
})

compareButton.addEventListener('click', () => {
  body?.classList.add('compare-price-modal-opened')

  $('.compare-price-slider').slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
})

closeModal(compareModal, 'compare-price-modal-opened')
closeModal(authorBaseModal, 'author-base-modal-opened')




// SLIDERS
$('.author-preview-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      }
    },
  ]
});

$('.results-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
$('.author-works-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
$('.works-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});


// TESTIMONIALS
const testimonialsData = [
  {
    id: 1,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 5,
    title: 'Великолепный курс. Очень понравился подход к ученикам!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
    media: [
      {
        title: 'Итоговая работа',
        link: '/assets/images/diploma13.jpg'
      },
      {
        title: 'Отзыв о курсе',
        link: '/assets/images/diploma14.jpg'
      },
      {
        title: 'Видео-отзыв',
        link: '/assets/images/diploma15.jpg'
      },
    ],
  },
  {
    id: 2,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '95%',
    rate: 5,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'test',
  },
  {
    id: 3,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 3,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 3,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 3,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 3,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '10%',
    rate: 3,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'test',
  },
  {
    id: 3,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '70%',
    rate: 3,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 3,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 3,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 3,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 3,
    title: 'Рекомендую. У меня получился отличный свитер!',
    advantages: 'не обязательно вязать с первого и даже со второго ряда. Т.е. по идее, вы можете начать вязать с любой точки, с любого ряда и получить при этом красивую и гармоничную вещь.',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 4,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 1,
    title: 'Фуууууу бек-бек',
    disAdvantages: ' не в онлайн. И как-то все это не то.',
  },
  {
    id: 5,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 3,
    title: 'Фуууууу бек-бек',
    disAdvantages: 'о выйти не в онлайн. И как-то все это не то.',
    media: [
      {
        title: 'Итоговая работа',
        link: '/assets/images/diploma13.jpg'
      },
      {
        title: 'Отзыв о курсе',
        link: '/assets/images/diploma14.jpg'
      },
      {
        title: 'Видео-отзыв',
        link: '/assets/images/diploma15.jpg'
      },
    ],
  },
  {
    id: 6,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 4,
    title: 'Фуууууу бек-бек',
    disAdvantages: 'торого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
]

const testimonialsNavItems = document.querySelectorAll('.testimonials-nav-item')
const testimonialsList = document.querySelector('.testimonials-list')
const loadMoreBtn = document.querySelector('.testimonials-actions-load-more')
const defaultRenderedItems = 5
let sortParam = 0
const view = {
  0: defaultRenderedItems,
  1: defaultRenderedItems,
  2: defaultRenderedItems,
  3: defaultRenderedItems,
  4: defaultRenderedItems,
  5: defaultRenderedItems,
}

function filterRateParam(param) {
  if (param === 0) {
    return testimonialsData
  }

  return testimonialsData?.filter(it => it?.rate === param)
}

function renderTestimonialItem(it) {
  let rating = ''
  let media = ''

  Array(it?.rate).fill('').map(() => {
    rating += '<span><img src="/assets/icons/star.svg" alt="star"></span>'
  })

  if (it?.media) {
    it.media.map(item => {
      media += `
       <li class="testimonials-list-item-media-item">
        <div class="testimonials-list-item-media-preview">
          <img src="${item?.link}" alt="preview" data-url="${item?.link}">
        </div>
        <p class="testimonials-list-item-media-desc">
          ${item?.title}
        </p>
      </li>
      `
    })
  }

  testimonialsList.insertAdjacentHTML( 'beforeend', `
     <li class="testimonials-list-item">
      <div class="testimonials-list-item-info">
        <div class="testimonials-list-item-author">
          <div class="testimonials-list-item-authot-image">
            <img src="${it?.authorPhoto}" alt="author image">
          </div>
          <a href="#" class="testimonials-list-item-author-name">
            ${it?.authorName}
          </a>
        </div>
        <div class="testimonials-list-item-stats">
          <p>
            <span>Пройдено:</span>
            <span>${it?.progress} Курса</span>
          </p>
          <p>
            <span>Оценка:</span>
            <span>
              <span class="testimonial-rating">
                ${rating}
              </span>
            </span>
          </p>
        </div>
      </div>
      <div class="testimonials-list-item-desc">
        <p class="testimonials-list-item-title">
          ${it?.title}
        </p>
        <div class="testimonials-list-item-desc-info">
          ${it?.media ? (`
            <div class="testimonials-list-item-media half">
              <ul class="testimonials-list-item-media-list">
                ${media}
              </ul>
            </div>
          `) : ''}
          <div class="testimonials-list-item-testimonial ${it?.media?.length ? 'half' : 'full'}">
            ${it?.advantages ? (`
              <p class="testimonials-list-item-advantages">
                <span>Понравилось: </span>
                ${it?.advantages}
              </p>
            `) : ''}
            ${it?.disAdvantages ? (`
              <p class="testimonials-list-item-disadvantages">
                <span>Не понравилось: </span>
                ${it?.disAdvantages}
              </p>
            `) : ''}
          </div>
        </div>
      </div>
    </li>
  `);
}

function renderTestimonialList(param) {
  testimonialsList.innerHTML = ''

  if (filterRateParam(param).length > 0) {
    filterRateParam(param).slice(0, view[param]).map(renderTestimonialItem)
  } else {
    testimonialsList.innerHTML =  '<h3 style="display: block; margin: 0 auto; text-align: center">Нету отзывов</h3>'
  }
}

renderTestimonialList(sortParam)

testimonialsNavItems.forEach(it => {
  const rate = Number(it?.dataset?.rate)
  const counter = it?.querySelector('span')
  counter.innerHTML = rate === 0
    ? testimonialsData?.length
    : testimonialsData?.filter(it => it?.rate === rate).length || 0

  it?.addEventListener('click', () => {
    const lastNavActive = document.querySelector('.testimonials-nav-item.active')

    lastNavActive?.classList.remove('active')
    sortParam = rate

    renderTestimonialList(sortParam)

    it.classList.toggle('active')
  })
})

loadMoreBtn.addEventListener('click', () => {
  view[sortParam] += 5

  renderTestimonialList(sortParam)
})



// MODALS
const medias = document.querySelectorAll('[data-url]')

console.log(medias)
