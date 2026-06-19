const showPassword = document.querySelector
("#repeat-show-password");
const passwordField = document.querySelector
("#re-password");

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type")
    == "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

})