var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
import { predefinedData } from "mock_data.js";
import {
    docGetId,
    getItemsFromLocalStorage,
    setItemsToLocalStorage,
} from "common_function.js";

window.addEventListener(
    "load",
    function() {

        let formElement = {
            emailInput: docGetId("email-input"),
            passwordInput: docGetId("password-input"),
            repeatPasswordInput: docGetId("repeatPassword-input"),
            loginBtn: docGetId("login-input"),
            messageBox: docGetId("message-box"),
        };


        let getUserData = getItemsFromLocalStorage("userData");
        if (getUserData !== null) {
            formElement.emailInput.value = getUserData.email;
            formElement.passwordInput.value = getUserData.password;
            formElement.repeatPasswordInput.value = getUserData.repeatPassword;
        }

        formElement.emailInput.addEventListener("keyup", function() {
            setItemsToLocalStorage("userData", formElement.emailInput.value, "", "");
        });
        formElement.loginBtn.addEventListener(
            "click",
            function() {
                let emailInput = formElement.emailInput;
                let passwordInput = formElement.passwordInput;
                let repeatPasswordInput = formElement.repeatPasswordInput;


                setItemsToLocalStorage("userData", emailInput.value, "", "");


                let messageBox = formElement.messageBox;
                let isEmailInputEmpty = emailInput.value === "";
                let isPasswordInputEmpty = passwordInput.value === "";
                let isRepeatPasswordInputEmpty = passwordInput.value === "";
                var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

                if (isEmailInputEmpty) {
                    messageBox.classList.remove("d-none");
                    messageBox.innerHTML = "Your Email Input Is Empty.";
                    emailInput.focus();
                } else if (isPasswordInputEmpty) {
                    messageBox.classList.remove("d-none");
                    messageBox.innerHTML = "Your Password Input Is Empty.";
                    passwordInput.focus();
                } else if (!emailInput.value.match(mailformat)) {
                    messageBox.classList.remove("d-none");
                    messageBox.innerHTML = "Your Email Format Is Wrong.";
                    emailInput.focus();
                } else {


                    let isPasswordNotRight =
                        passwordInput.value !== repeatPasswordInput.value;
                    if (isPasswordNotRight) {
                        messageBox.classList.remove("d-none");
                        messageBox.innerHTML = "Wrong Password.";
                        passwordInput.focus();
                    } else {
                        messageBox.classList.add("d-none");
                        setItemsToLocalStorage(
                            "userData",
                            emailInput.value,
                            passwordInput.value,
                            repeatPasswordInput.value
                        );
                        window.location.replace("admin.html");
                    }
                }
            },
            false
        );
    },
    false
);