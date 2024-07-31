document.addEventListener("DOMContentLoaded", function () {

    const registrationForm = document.getElementById("signup-form");
    const message = document.getElementById("message");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.some(user => user.username === username && user.email === email);
        console.log(existingUser)

        if (existingUser) {
            // User already exists
            message.style.display = "block"
            message.style.background = "red"
            message.textContent = "User Already Exists";
        } else {
            // Add new user to localStorage
            users.push({ username, password, email });
            localStorage.setItem("users", JSON.stringify(users));
            message.textContent = "SignUp Successfull";
            message.style.background = "green"
            message.style.display = "block"
            registrationForm.reset();
            setTimeout(function () {
                window.location.href = "../index.html";
            }, 1000);
        }
    });
});
