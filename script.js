var ham = document.querySelector('.ham');
var nav = document.querySelector('.nav-list')
ham.addEventListener('click', () => {
    nav.classList.toggle("visible");
})