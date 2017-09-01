(function () {
  // include plugin equalHeight
  function onResize() {
    $('.services-content').equalHeights();
  }onResize();
  // make height for block services images
  function servicesHeight() {
    $(".services__items").each(function () {
          var $this = $(this),
              content = $this.find(".services-content"),
              contentHeight = content.outerHeight(),
              img = content.siblings();
          img.css('min-height', contentHeight);
        }
    )
  }servicesHeight();

  (function () {
    //initialize function counted height for block background services
    $(".owl-carousel").on('initialized.owl.carousel', function () {
      setTimeout(function () {
        onResize();
        servicesHeight();
      }, 100);

    });
    // include plugin owl-carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      nav: true,
      dots: false,
      smartSpeed: 700,
      navText: ["",""],
      responsiveClass: true,
      responsive:{
        0:{
          items:1
        },
        780:{
          items:2
        },
        992:{
          items:3
        }
      }
    }).on('changed.owl.carousel', function() { // resize for responsive
      servicesHeight();
      onResize();
    });

  })();

})();




