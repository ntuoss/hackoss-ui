$(document).ready(function() {
    $(window).on("scroll", function() {
        var wn = $(window).scrollTop();

        const mq = window.matchMedia("(min-width: 991px)");
        if (mq.matches) {
            if (wn > 75) {
                $(".navbar").css("background", "white");
                $(".navbar-light .navbar-nav .nav-link").css("color", "rgba(0,0,0,0.5)");
                $(".navbar-light .navbar-nav .active>.nav-link").css("color", "black");
                $("#nav-logo").attr("src", "../assets/logo/Logo_Colour_Small.png");
                $(".navbar").css("border-bottom", "1px grey solid");
            } else {
                $(".navbar").css("background", "transparent");
                $("#nav-logo").attr("src", "../assets/logo/Logo_Light_Small.png");
                $(".navbar-light .navbar-nav .nav-link").css("color", "rgba(255,255,255,0.5)");
                $(".navbar-light .navbar-nav .active>.nav-link").css("color", "white");
                $(".navbar").css("border-bottom", "1px white none");
            }
        } else {
            $(".navbar").css("background", "white");
            $(".navbar-light .navbar-nav .nav-link").css("color", "rgba(0,0,0,0.5)");
            $(".navbar-light .navbar-nav .active>.nav-link").css("color", "black");
            $("#nav-logo").attr("src", "../assets/logo/Logo_Colour_Small.png");
            $(".navbar").css("border-bottom", "1px grey solid");
            $(".navbar-collapse").css("background", "white");
        }
    });
});
