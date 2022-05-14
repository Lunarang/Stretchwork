// global variables
const base_url = "http://127.0.0.1:3000"
const stretchService = new StretchService(base_url)

// refreshes page to return to 'home'
const h1 = document.querySelector('h1')
h1.addEventListener('click', (e) => e.preventDefault(window.location.reload()))

stretchService.getStretches()