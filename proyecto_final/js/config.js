const credentials = {
  username: "cenfo",
  password: "123",
};

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameLabel = document.querySelector('label[for="username"] span');
  const passwordLabel = document.querySelector('label[for="password"] span');
  const loginButton = document.getElementById("login-button");

  passwordInput.addEventListener("focus", function () {
    passwordLabel.textContent = "Contraseña";
  });

  passwordInput.addEventListener("blur", function () {
    if (!passwordInput.value) {
      passwordLabel.textContent = "Ingrese su contraseña";
    }
  });


  function showError(icon, title, message, popup, color) {
    Swal.fire({
      html:
        '<div style="display: flex; align-items: center; padding: 0; margin: 0;">' +
        '<lottie-player src="' +
        icon +
        '" background="transparent"  speed="1"  style="width: 120px; height: 120px;" loop autoplay></lottie-player>' +
        '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;  margin: 0px 0px 0px 20px; padding: 0;">' +
        '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 32px; color: ' +
        color +
        '; margin: 5px;">' +
        title +
        "</p>" +
        '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 24px; margin: 5px;">' +
        message +
        "</p></div></div>",
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: popup,
      },
    });
  }

  function clearInputs() {
    usernameInput.value = "";
    passwordInput.value = "";
    usernameLabel.textContent = "Ingrese su usuario";
    passwordLabel.textContent = "Ingrese su contraseña";
  }

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username && !password) {
      showError(
        "animations/credentials.json",
        "Error",
        "Ingrese su usuario y contraseña",
        "custom-swal-popup-error",
        "red"
      );
    } else if (!username) {
      showError(
        "animations/username.json",
        "Error",
        "Ingrese su usuario",
        "custom-swal-popup-error",
        "red"
      );
    } else if (!password) {
      showError(
        "animations/password.json",
        "Error",
        "Ingrese su contraseña",
        "custom-swal-popup-error",
        "red"
      );
    } else {
      if (
        username === credentials.username &&
        password === credentials.password
      ) {
        localStorage.setItem("loginSuccess", "true");
        window.location.href = "landing.html";
        clearInputs();
      } else {
        showError(
          "animations/error-triangle.json",
          "Error",
          "Credenciales incorrectas Intente nuevamente",
          "custom-swal-popup-error",
          "red"
        );
        clearInputs();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("loginSuccess") === "true") {
    Swal.fire({
      html:
        '<div style="display: flex; align-items: center; padding: 0px; margin: 0;">' +
        '<lottie-player src="animations/success.json" background="transparent" speed="1" style="width: 100px; height: 100px;" loop autoplay></lottie-player>' +
        '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-left: 20px;">' +
        '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 32px; color: green; padding: 0px; margin: 5px;">Bienvenido</p>' +
        '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 24px; padding: 0px; margin: 5px;">Se ha logueado con éxito</p></div></div>',
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: "custom-swal-popup-success",
      },
    });

    localStorage.removeItem("loginSuccess");
  }
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".ml");
  if (window.scrollY > 0) {
    [nav, logo].forEach((el) => el.classList.add("scrolled"));
  } else {
    [nav, logo].forEach((el) => el.classList.remove("scrolled"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const inicioLink = document.querySelector('a[href="#inicio"]');

  if (inicioLink) {
    inicioLink.addEventListener("click", function (event) {
      event.preventDefault();

      const nav = document.querySelector("nav");
      const logo = document.querySelector(".ml");

      [nav, logo].forEach((n) => n.classList.remove("scrolled"));
    });
  }
});

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
      menuItems.forEach(item => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${targetId}`) {
              item.classList.add("active");
          }
      });
  }

  menuItems.forEach(item => {
      item.addEventListener("click", function (e) {
          e.preventDefault();
          let targetId = this.getAttribute("href").substring(1);
          let targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: "smooth"
          });

          setActiveLink(targetId);
      });
  });

  window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;

      sections.forEach(section => {
          let sectionTop = section.offsetTop - 60;
          let sectionHeight = section.offsetHeight;
          let sectionId = section.getAttribute("id");

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveLink(sectionId);
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inicio_reserve = document.getElementById("inicio_reserve");

  if (inicio_reserve) {
      inicio_reserve.onclick = function () {
          window.location.href = "cita.html";
      };
  }
});