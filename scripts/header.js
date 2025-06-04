const setupHeader = () => {
  const burgerButton = document.querySelector('[data-js-burger-button]')
  const overlay = document.querySelector('[data-js-overlay]')

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active')
    overlay.classList.toggle('is-active')
    document.documentElement.classList.toggle('is-lock')
  })
}

export default setupHeader