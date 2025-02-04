document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginError = document.getElementById("loginError");
    const registerError = document.getElementById("registerError");
    
    const showLoginBtn = document.getElementById("showLogin");
    const showRegisterBtn = document.getElementById("showRegister");

    // Mostrar login o registro
    showLoginBtn.addEventListener("click", () => {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    showRegisterBtn.addEventListener("click", () => {
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Validación del login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const user = document.getElementById("loginUser").value.trim();
        const pass = document.getElementById("loginPass").value.trim();

        if (user === "" || pass === "") {
            loginError.textContent = "Por favor, completa todos los campos.";
        } else if (pass.length < 6) {
            loginError.textContent = "La contraseña debe tener al menos 6 caracteres.";
        } else {
            loginError.textContent = "";
            alert("Inicio de sesión exitoso");
            loginForm.reset();
        }
    });

    // Validación del registro
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const user = document.getElementById("registerUser").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const pass = document.getElementById("registerPass").value.trim();
        const passConfirm = document.getElementById("registerPassConfirm").value.trim();

        if (user === "" || email === "" || pass === "" || passConfirm === "") {
            registerError.textContent = "Todos los campos son obligatorios.";
        } else if (!/^[a-zA-Z0-9]+$/.test(user)) {
            registerError.textContent = "El usuario solo puede contener letras y números.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            registerError.textContent = "Ingresa un correo electrónico válido.";
        } else if (pass.length < 6) {
            registerError.textContent = "La contraseña debe tener al menos 6 caracteres.";
        } else if (pass !== passConfirm) {
            registerError.textContent = "Las contraseñas no coinciden.";
        } else {
            registerError.textContent = "";
            alert("Registro exitoso");
            registerForm.reset();
        }
    });
});
