document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.intro').classList.add('reveal');

    setTimeout(function() {
        document.querySelector('.current').classList.add('reveal');
    }, 200);

    setTimeout(function() {
        document.querySelector('.projects').classList.add('reveal');
    }, 400);

    setTimeout(function() {
        document.querySelector('.social').classList.add('reveal');
    }, 600);
});