window.onload = function() {
  var navbarCollapse = function() {
    var mainNav = document.getElementById("mainNav");
    if (window.pageYOffset > mainNav.offsetTop) {
      console.log("add");
      mainNav.classList.add("navbar-shrink");
    } else {
      console.log("remove");
      mainNav.classList.remove("navbar-shrink");
    }
  };

  navbarCollapse();

  window.addEventListener('scroll', function() {
    navbarCollapse();
  });
}
