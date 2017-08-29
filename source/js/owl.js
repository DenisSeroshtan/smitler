(function () {
  console.log('ok')
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    smartSpeed: 700,
    navText: ["",""],
    responsive:{
      0:{
        items:1
      },
      780:{
        items:2
      },
      1100:{
        items:3
      }

    }
  })
}());