const progressSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress-bar__bar span');
window.onscroll = function () {
    if (window.scrollY >= progressSection.offsetTop - 300) {
        console.log('section reached');
        progressBars.forEach(progressBar => {
            console.log(progressBar);
            progressBar.style.width = progressBar.dataset.progress;
        })
    }
}

const scrollToTop = document.querySelector('.scroll-to-top');
window.onscroll = function () {
    if (window.pageYOffset > 50 || document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
    scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
}
scrollToTop.addEventListener('click', scrollTop);
function scrollTop () {
    window.scroll(0,0);
}