
  let items = document.querySelectorAll('.carousel .carousel-item')

  items.forEach((el) => {
    const minPerSlide = 8
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
    }
  })
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });