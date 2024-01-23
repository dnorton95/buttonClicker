// script.js
function toggleLoginLogout() {
    var loginButton = document.querySelector(".login-logout");

    if (loginButton.innerText === "Login") {
        loginButton.innerText = "Logout";
      // Additional logic for logout functionality
    } else {
        loginButton.innerText = "Login";
      // Additional logic for login functionality
    }
}

function remove(el) {
    var addDefButton = el;
    addDefButton.remove()
}

function alertLike() {
    alert("A ninja was liked!")
}