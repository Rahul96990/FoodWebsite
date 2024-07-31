document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const authenticatedUser = users.find(user => user.email === email && user.password === password);
        console.log(authenticatedUser);

        if (authenticatedUser) {
            // User authenticated, redirect to secured page or display success message
            message.textContent = "Login Successful";
            message.style.background = "green"
            message.style.display = "block"
             setTimeout(function() {
                 window.location.href = "../index.html";
             }, 1000);
        } else {
            // User not found or incorrect credentials
            message.style.display = "block"
            message.style.background = "red"
            message.textContent = "Invalid Value";
        }
    });
});
