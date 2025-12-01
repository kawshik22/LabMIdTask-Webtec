document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let phoneError = document.getElementById("phoneError");
    let successMsg = document.getElementById("successMsg");

    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
    phoneError.innerText = "";
    successMsg.innerText = "";

    let isValid = true;

    if (name === "") {
        nameError.innerText = "Full Name is required";
        isValid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.innerText = "Invalid email format";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    }

    if (isNaN(phone) || phone === "") {
        phoneError.innerText = "Phone number must contain only digits";
        isValid = false;
    }

    if (isValid) {
        successMsg.innerText = "Registration Successful!";
    }
});
