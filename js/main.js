// Page scrolling animation. Also removes hash from URL.
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 70)
    }, 1000, 'easeInOutExpo');
    location.hash = '';
    event.preventDefault();
});

// Navbar transparency on screens >= 992px.
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 75) {
        $('.navbar').removeClass('navbar-transparent');
    } else {
        $('.navbar').addClass('navbar-transparent');
    }
});
