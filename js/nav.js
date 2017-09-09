$(document).ready(function() {
  $(window).on("scroll", function() {
    var wn = $(window).scrollTop();
    if (wn > 200) {
      $(".navbar").css("background", "white");
      $(".navbar-light .navbar-nav .nav-link").css("color", "rgba(0,0,0,0.5)");
      $(".navbar-light .navbar-nav .active>.nav-link").css("color", "black");
      $("#nav-logo").attr("src","../assets/logo/Logo_Colour.png");
    } else {
      $(".navbar").css("background", "transparent");
      $("#nav-logo").attr("src","../assets/logo/Logo_Light.png");
      $(".navbar-light .navbar-nav .nav-link").css("color", "rgba(255,255,255,0.5)");
      $(".navbar-light .navbar-nav .active>.nav-link").css("color", "white");
    }
  });
});
