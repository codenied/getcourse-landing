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



// SLIDERS
$('.author-preview-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
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
    progress: '100%',
    rate: 5,
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
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 5,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 3,
    title: 'Фуууууу бек-бек',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
  },
  {
    id: 6,
    authorName: 'Александра Александрова',
    authorPhoto: '/assets/images/testimonial-author.png',
    progress: '100%',
    rate: 4,
    title: 'Фуууууу бек-бек',
    disAdvantages: 'я все время находилась за компьютером, с которого мне было сложно выйти не в онлайн. И как-то все это не то.',
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

  Array(it?.rate).fill('').map(() => {
    rating += '<span><img src="/assets/icons/star.svg" alt="star"></span>'
  })

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
          <div class="testimonials-list-item-media half">
            <ul class="testimonials-list-item-media-list">
              <li class="testimonials-list-item-media-item">
                <div class="testimonials-list-item-media-preview">
                  <img src="/assets/images/course-video-preview.png" alt="preview">
                </div>
                <p class="testimonials-list-item-media-desc">
                  Итоговая работа
                </p>
              </li>
              <li class="testimonials-list-item-media-item">
                <div class="testimonials-list-item-media-preview">
                  <img src="/assets/images/course-video-preview.png" alt="preview">
                </div>
                <p class="testimonials-list-item-media-desc">
                  Итоговая работа
                </p>
              </li>
              <li class="testimonials-list-item-media-item">
                <div class="testimonials-list-item-media-preview">
                  <img src="/assets/images/course-video-preview.png" alt="preview">
                </div>
                <p class="testimonials-list-item-media-desc">
                  Итоговая работа
                </p>
              </li>
            </ul>
          </div>
          <div class="testimonials-list-item-testimonial half">
            ${it?.advantages ? (`
              <p class="testimonials-list-item-advantages">
                <span>Не понравилось: </span>
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

  filterRateParam(param).slice(0, view[param]).map(renderTestimonialItem)
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

