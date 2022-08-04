$('body').scrollspy({
    offset: 150,
    target: '#my-nav'
  });
  
  $("#my-nav ul li a[href^='#']").on('click', function(e) {
    var target = this.hash;
    var offSet = $('.navbar').height() + 16;
  
    e.preventDefault();
  
    $('html, body').animate({
      scrollTop: $(target).offset().top - offSet
    }, 500, function() {
  
      return window.history.pushState(null, null, target);
    });
  
  });