const form = document.querySelector(".formContainer");

const yourName = document.querySelector("#name");
const yourNameError = document.querySelector("#nameError");
let showNameError = false;

const yourEmail = document.querySelector("#email");
const yourEmailError = document.querySelector("#emailError");
let showEmailError = false; 

const yourMessage = document.querySelector("#message");
const yourMessageError = document.querySelector("#messageError");
let showMessageError = false;

const messageSubmission = document.querySelector("#messageSubmission");

form.addEventListener("submit", formValidation);

function formValidation() {
    event.preventDefault(); 
    console.log("Submitted.");

// Name

    const yourNameValue = yourName.value;

    if (validateLength(yourNameValue, 1) === true) {
        yourNameError.style.display = "none";
        showNameError = false;
    } else {
        yourNameError.style.display = "block";
        showNameError = true;
    }

// Email

    const yourEmailValue = yourEmail.value;

    if (validateEmail(yourEmailValue)) {
        yourEmailError.style.display = "none";
        showEmailError = false;
    } else {
        yourEmailError.style.display = "block";
        showEmailError = true;
    }

// Message

    const yourMessageValue = yourMessage.value;

    if (validateLength(yourMessageValue, 4) === true) {
        yourMessageError.style.display = "none";
        showMessageError = false;
    } else {
        yourMessageError.style.display = "block";
        showMessageError = true;
    }

    if (showNameError === true || showMessageError === true || showEmailError === true) {
        messageSubmission.style.display = "none";
    } else {
        messageSubmission.style.display = "block";
    }

}

function validateLength(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(yourEmailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(yourEmailValue)) {
        return true;
    } else {
        return false;
    }
}

