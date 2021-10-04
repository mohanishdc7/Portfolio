let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function load() {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});