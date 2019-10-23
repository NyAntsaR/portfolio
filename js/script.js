$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Frontend Web Developer.", "JavaScript.", "React."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
})

