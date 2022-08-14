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