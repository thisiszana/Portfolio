/* =============== toggle style switcher ===============*/
const styleSwitcherToglle = document.querySelector('.style-switcher-toggler');
styleSwitcherToglle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// hide style switcher on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

/* =============== thems style color ===============*/
const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}

/* =============== thems light and dark mode ===============*/
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})
