window.onload = function() {
  var navbarCollapse = function() {
    var mainNav = document.getElementById("mainNav");
    if (window.pageYOffset > mainNav.offsetTop) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }
  };
  navbarCollapse();

  // scroll spy
  var section = document.querySelectorAll(".scrollspy-section");
  var sections = {};

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = {
      start: e.offsetTop,
      end: e.offsetTop + e.offsetHeight
    };
  });

  var scrollSpy = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i in sections) {
      if (scrollPosition >= sections[i].start && scrollPosition <= sections[i].end) {
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav-link active');
      } else {
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav-link');
      }
    }
  }
  // scroll spy end

  window.addEventListener('scroll', function() {
    navbarCollapse();
    scrollSpy();
  });

}
