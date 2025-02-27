const credentials = {
    username: 'user',
    password: 'password'
};

let isLoggedIn = sessionStorage.getItem("isLoggedIn") === "1" ? 1 : 0;

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

    // Cierre de sesión
    document.getElementById("logoutButton").addEventListener("click", function () {
        isLoggedIn = 0;
        sessionStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });
}