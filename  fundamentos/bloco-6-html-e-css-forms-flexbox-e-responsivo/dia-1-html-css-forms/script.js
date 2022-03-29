const button = document.querySelector("#submit");
let inputFullName = document.querySelector("#full-name");
let inputUser = document.querySelector("#user");

function fullName() {
    console.log(inputFullName.value);
    user.innerHTML = inputFullName.value;
}
button.addEventListener("click", fullName);