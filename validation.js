function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Будь ласка, заповніть всі поля");
    return false;
}

    if (password !== confirmPassword) {
    alert("Паролі не співпадають");
    return false;
}

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
    alert("Будь ласка, введіть дійсну адресу електронної пошти");
    return false;
}
    window.location.href = "main.html";
}
