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

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".ml");
  const ml360 = document.querySelector(".ml360");

  if (window.scrollY > 0) {
    [nav, logo, ml360].forEach((el) => el.classList.add("scrolled"));
  } else {
    [nav, logo, ml360].forEach((el) => el.classList.remove("scrolled"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const inicio_reserve = document.getElementById("inicio_reserve");

  if (inicio_reserve) {
      inicio_reserve.onclick = function () {
          window.location.href = "cita.html";
      };
  }
});