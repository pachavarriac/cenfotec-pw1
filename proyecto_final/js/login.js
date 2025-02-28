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
        
        if (clientText) {
            clientText.style.display = "none";
        }

        // Cambiar el botón de "Iniciar Sesión" a "Salir"
        if (loginButton) {
            loginButton.textContent = "Salir";
            loginButton.id = "logoutButton";
            loginButton.removeAttribute("href");
        }

        // Mostrar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "block";
        }
    } else {
        
        if (clientText) {
            clientText.style.display = "block";
        }

        // Restaurar el botón a "Iniciar Sesión"
        if (loginButton) {
            loginButton.textContent = "Iniciar Sesión";
            loginButton.id = "headerButtonLogin";
            loginButton.setAttribute("href", "login.html");
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
        window.location.href = "index.html";
    } else {
        window.location.reload();
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
        const loginButton = document.querySelector(".loginButton");
    
        if (username === credentials.username && password === credentials.password) {
            isLoggedIn = 1;
            sessionStorage.setItem("isLoggedIn", "1");
            window.location.href = "app.html";
        } else {
            // Cambiar el estilo del botón a rojo
            loginButton.style.borderColor = "red";
            loginButton.style.color = "red";
            loginButton.style.boxShadow = "rgb(255, 0, 0) 0px 0px 15px 0px";
            
    
            // Mostrar mensaje de error
            document.getElementById("message").textContent = "Usuario o contraseña incorrectos";
            document.getElementById("message").style.color = "red";
    
            // Restaurar el estilo del botón después de 5 segundos
            setTimeout(() => {
                loginButton.style.borderColor = "";
                loginButton.style.color = "";
                loginButton.style.boxShadow = "";
            }, 1000);
    
            // Limpiar los campos después de 5 segundos
            setTimeout(() => {
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
                document.getElementById("message").textContent = "";
            }, 1000);
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
            event.preventDefault();
            handleLogout();
        });
    }
});

function updateHeader() {
    const clientText = document.querySelector(".question");
    const loginButton = document.querySelector(".headerButtonLogin");
    const userAreaMenuItem = document.getElementById("userAreaMenuItem");

    if (isLoggedIn === 1) {
        
        if (clientText) {
            clientText.style.display = "none";
        }

        // Cambiar el botón de "Iniciar Sesión" a "Salir"
        if (loginButton) {
            loginButton.textContent = "SALIR";
            loginButton.id = "logoutButton";
            loginButton.classList.remove("headerButtonLogin");
            loginButton.classList.add("headerButtonLogout");
            loginButton.removeAttribute("href");
        }

        // Mostrar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "block";
        }
    } else {
        
        if (clientText) {
            clientText.style.display = "block";
        }

        // Restaurar el botón a "Iniciar Sesión"
        if (loginButton) {
            loginButton.textContent = "Iniciar Sesión";
            loginButton.id = "headerButtonLogin";
            loginButton.classList.remove("headerButtonLogout");
            loginButton.classList.add("headerButtonLogin");
            loginButton.setAttribute("href", "login.html");
        }

        // Ocultar el elemento de menú "Área de usuario"
        if (userAreaMenuItem) {
            userAreaMenuItem.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".loginButton");

    function updateButtonStyle() {
        if (usernameInput.value && passwordInput.value) {
            loginButton.style.borderColor = "#4ac590";
            loginButton.style.color = "#4ac590";
            loginButton.style.boxShadow = "rgb(74, 197, 144) 0px 0px 15px 0px";
        } else {
            loginButton.style.borderColor = "";
            loginButton.style.color = "";
            loginButton.style.boxShadow = "";
        }
    }

    usernameInput.addEventListener("input", updateButtonStyle);
    passwordInput.addEventListener("input", updateButtonStyle);
});