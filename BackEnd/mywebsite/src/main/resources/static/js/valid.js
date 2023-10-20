document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("pswd");
    const confirmPasswordField = document.getElementById("confipswd");
    const message = document.getElementById("message");
    const myButton = document.getElementById("myButton");
    const passwordMessage = document.getElementById("pswdmessage");

    confirmPasswordField.addEventListener("input", function () {
        const passwordValue = passwordField.value;
        const confirmPasswordValue = confirmPasswordField.value;
        if (passwordValue === confirmPasswordValue) {
            message.textContent = "Passwords match";
            message.style.color = "green";
            myButton.disabled = false;
            myButton.style.cursor = "pointer"
        } else {
            message.textContent = "Passwords do not match";
            message.style.color = "red";
            myButton.disabled = true;
            myButton.style.cursor = "not-allowed"
        }
    });
    passwordField.addEventListener("input", function () {
        const password = passwordField.value;

        if (password.length >= 6) {
            passwordMessage.textContent = "Password is valid";
            passwordMessage.style.color = "green";
            myButton.disabled = false
            myButton.style.cursor = "pointer"
        } else {
            passwordMessage.textContent = "Password must contain at least 6 characters";
            passwordMessage.style.color = "red";
            myButton.disabled = true
            myButton.style.cursor = "not-allowed"
        }
    });
});

$(document).ready(function(){
    $(".alert").fadeOut(10000);
});

$(document).ready(function(){
    $(".messages").fadeOut(7000);
});

$(document).ready(function(){
    $(".forgetpass").fadeOut(20000);
});
