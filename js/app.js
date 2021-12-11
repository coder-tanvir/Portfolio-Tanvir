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

  ///Skills
  var waypoint = new Waypoint({
    element: document.getElementById("skills"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:90%;transition:1s all");
      p[1].setAttribute("style", "width:90%;transition:2s all");
      p[2].setAttribute("style", "width:80%;transition:1.4s all");
      p[3].setAttribute("style", "width:80%;transition:1.3s all");
      p[4].setAttribute("style", "width:70%;transition:2.5s all");
      p[5].setAttribute("style", "width:75%;transition:1.5s all");
      p[6].setAttribute("style", "width:75%;transition:3s all");
      p[7].setAttribute("style", "width:80%;transition:2.3s all");
      p[8].setAttribute("style", "width:85%;transition:2s all");
      p[9].setAttribute("style", "width:75%;transition:1s all");
      p[10].setAttribute("style", "width:85%;transition:2s all");
      p[11].setAttribute("style", "width:70%;transition:1.3s all");
      p[12].setAttribute("style", "width:75%;transition:2s all");
      p[13].setAttribute("style", "width:85%;transition:2.4s all");
      p[14].setAttribute("style", "width:80%;transition:2.7s all");
      p[15].setAttribute("style", "width:70%;transition:2.2s all");
      p[16].setAttribute("style", "width:80%;transition:2s all");
      p[17].setAttribute("style", "width:90%;transition:3s all");
    },
    offset: "80%",
  });
  //////////Services
  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin:10,   // since one item ou can remove it
    nav: false,
    // dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
    // animateOut : "fadeOut",
    animateIn: "fadeInRight",
  });
});
