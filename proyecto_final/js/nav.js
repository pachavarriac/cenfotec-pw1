document.addEventListener("DOMContentLoaded", function () {
  const firstMenuItem = document.querySelector(".mc a");

  if (firstMenuItem) {
    firstMenuItem.classList.add("lip");
    firstMenuItem.focus();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu a");
  const headerHeight = document.querySelector("header").offsetHeight;
  const navHeight = document.querySelector("nav").offsetHeight;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (this.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetPosition =
            targetElement.offsetTop - headerHeight - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let menuItems = document.querySelectorAll(".lip a");

  function setActiveLink(targetId) {
    menuItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${targetId}`) {
        item.classList.add("active");
      }
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });

      setActiveLink(targetId);
    });
  });

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      let sectionTop = section.offsetTop - 60;
      let sectionHeight = section.offsetHeight;
      let sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveLink(sectionId);
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const inicioLink = document.querySelector('a[href="#inicio"]');

//   if (inicioLink) {
//     inicioLink.addEventListener("click", function (event) {
//       event.preventDefault();

//       const nav = document.querySelector("nav");
//       const logo = document.querySelector(".ml");

//       [nav, logo].forEach((n) => n.classList.remove("scrolled"));
//     });
//   }
// });
