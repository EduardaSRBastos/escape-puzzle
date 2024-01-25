// Array of hex colors for backgrounds
var backgroundColors = ['#ff9999', '#c4e2ff', '#99ff99', '#fffc66', '#b8b3ff', '#ffb366', '#cc99ff', '#ff6666', '#99ccff', '#ccffcc'];

function setBackgroundColor() {
    // Get the image number from the src attribute
    var imgSrc = document.querySelector('#puzzle img').getAttribute('src');
    var imgNumber = parseInt(imgSrc.match(/\d+/)[0]);

    // Set background color based on the image number
    document.documentElement.style.setProperty('--puzzle-background', backgroundColors[imgNumber - 1]);
}

function setRandomPosition(x, y, filter) {
    var easterEggImage = document.querySelector('#easterEgg img');

    easterEggImage.style.left = x + 'px';
    easterEggImage.style.top = y + 'px';
    easterEggImage.style.filter = filter;
}