$(document).ready(function () {
  $(window).on("scroll", function () {
    //How many pixels the user has scrolled from the top
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
});
