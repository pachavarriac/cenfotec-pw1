const credentials = {
    username: 'user',
    password: 'password'
};

let isLoggedIn = sessionStorage.getItem("isLoggedIn") === "1" ? 1 : 0;

// Función para actualizar el header cuando el usuario está logueado
function updateHeader() {
    const clientText = document.querySelector(".question");
    const loginButton = document.querySelector(".headerButtonLogin");
    const userAreaMenuItem = document.getElementById("userAreaMenuItem");

    if (isLoggedIn === 1) {
        // Ocultar el texto "¿Ya eres cliente? ➜"
        if (clientText) {
            clientText.style.display = "none";
        }

        // Cambiar el botón de "Iniciar Sesión" a "Salir"
        if (loginButton) {
            loginButton.textContent = "Salir";
            loginButton.id = "logoutButton";
            loginButton.removeAttribute("href"); // Eliminar el enlace a login.html
        }

        // Mostrar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "block";
        }
    } else {
        // Mostrar el texto "¿Ya eres cliente? ➜" si no está logueado
        if (clientText) {
            clientText.style.display = "block";
        }

        // Restaurar el botón a "Iniciar Sesión"
        if (loginButton) {
            loginButton.textContent = "Iniciar Sesión";
            loginButton.id = "headerButtonLogin";
            loginButton.setAttribute("href", "login.html"); // Restaurar el enlace a login.html
        }

        // Ocultar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "none";
        }
    }
}

// Función para manejar el logout
function handleLogout() {
    isLoggedIn = 0;
    sessionStorage.removeItem("isLoggedIn");

    if (window.location.pathname.includes("app.html")) {
        window.location.href = "index.html"; // Redirigir a index.html desde app.html
    } else {
        window.location.reload(); // Recargar la página actual desde otras páginas
    }
}

// login.html
if (window.location.pathname.includes("login.html")) {
    if (isLoggedIn === 1) {
        window.location.href = "app.html";
    }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === credentials.username && password === credentials.password) {
            isLoggedIn = 1;
            sessionStorage.setItem("isLoggedIn", "1");
            window.location.href = "app.html";
        } else {
            document.getElementById("message").textContent = "Usuario o contraseña incorrectos";
            document.getElementById("message").style.color = "red";
        }
    });
}

// app.html
if (window.location.pathname.includes("app.html")) {
    if (isLoggedIn === 0) {
        window.location.href = "login.html";
    }

    // Actualizar el header al cargar la página
    updateHeader();

    // Cierre de sesión
    document.addEventListener("DOMContentLoaded", function () {
        const logoutButton = document.getElementById("logoutButton");
        if (logoutButton) {
            logoutButton.addEventListener("click", function (event) {
                event.preventDefault(); // Evitar que el botón redirija
                handleLogout();
            });
        }
    });
}

// Actualizar el header en todas las páginas
updateHeader();

// Asignar el evento de logout al botón "Salir" en todas las páginas
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que el botón redirija
            handleLogout();
        });
    }
});

function updateHeader() {
    const clientText = document.querySelector(".question");
    const loginButton = document.querySelector(".headerButtonLogin");
    const userAreaMenuItem = document.getElementById("userAreaMenuItem");

    if (isLoggedIn === 1) {
        // Ocultar el texto "¿Ya eres cliente? ➜"
        if (clientText) {
            clientText.style.display = "none";
        }

        // Cambiar el botón de "Iniciar Sesión" a "Salir"
        if (loginButton) {
            loginButton.textContent = "SALIR";
            loginButton.id = "logoutButton";
            loginButton.classList.remove("headerButtonLogin"); // Eliminar la clase anterior
            loginButton.classList.add("headerButtonLogout"); // Agregar la nueva clase
            loginButton.removeAttribute("href"); // Eliminar el enlace a login.html
        }

        // Mostrar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "block";
        }
    } else {
        // Mostrar el texto "¿Ya eres cliente? ➜" si no está logueado
        if (clientText) {
            clientText.style.display = "block";
        }

        // Restaurar el botón a "Iniciar Sesión"
        if (loginButton) {
            loginButton.textContent = "Iniciar Sesión";
            loginButton.id = "headerButtonLogin";
            loginButton.classList.remove("headerButtonLogout"); // Eliminar la clase de "Salir"
            loginButton.classList.add("headerButtonLogin"); // Restaurar la clase original
            loginButton.setAttribute("href", "login.html"); // Restaurar el enlace a login.html
        }

        // Ocultar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "none";
        }
    }
}