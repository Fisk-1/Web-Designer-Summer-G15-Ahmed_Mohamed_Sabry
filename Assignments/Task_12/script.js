var userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (e) {

    e.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var h4 = document.createElement("h4");

    h3.innerText = nameInput.value;
    h4.innerText = emailInput.value;

    div.appendChild(h3);
    div.appendChild(h4);

    div.classList.add("alert", "alert-primary");

    var divContainer = document.getElementById("divContainer");

    divContainer.appendChild(div);

    nameInput.value = "";
    emailInput.value = "";
});