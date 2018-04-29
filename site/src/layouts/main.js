window.onload = function() {
  var section = document.querySelectorAll(".scrollspy-section"),
    mainNav = document.getElementById("mainNav"),
    offset = mainNav.offsetHeight,
    sections = {};

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = {
      start: e.offsetTop - offset,
      end: (e.offsetTop + e.offsetHeight) - offset
    };

    document.querySelector('a[href*=' + e.id + ']:not([href="#"]').addEventListener("click", function(evt) {
      window.scroll({
        top: sections[e.id].start,
        left: 0,
        behavior: 'smooth'
      });
      evt.preventDefault();
    });
  });

  var navbarCollapse = function() {
    if (window.pageYOffset > mainNav.offsetTop) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }
  };
  navbarCollapse();

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

  window.addEventListener('scroll', function() {
    navbarCollapse();
    scrollSpy();
  });

}
