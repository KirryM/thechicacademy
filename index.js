document.addEventListener("scroll", function () {
    var sections = document.querySelectorAll(".section");
    var navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(function (section, index) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    });
  });