const svgColor = document.querySelector('.svg-color');
const shareButton = document.querySelector('.share');
const mobile = document.querySelector('.mobile');
const desktop = document.querySelector('.desktop');
shareButton.addEventListener('click', function() {
    svgColor.classList.toggle('svg-color-click');
    shareButton.classList.toggle('share-click');
    if (window.innerWidth <= 850) {
        mobile.classList.toggle('flex');
    }
    else {
        desktop.classList.toggle('flex');
    }
})
function toggleContainers() {
    if (window.innerWidth <= 850 && desktop.classList.contains('flex')) {
        desktop.classList.remove('flex');
        mobile.classList.add('flex');
    }
    else if (window.innerWidth >= 850 && mobile.classList.contains('flex')) {
        mobile.classList.remove('flex');
        desktop.classList.add('flex');
    } 
}
window.addEventListener('resize', toggleContainers);