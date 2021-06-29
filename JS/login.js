// Get the modal
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
} from "./common_function.js";

window.addEventListener(
    "load",
    function() {

        let formElement = {
            userNameInput: docGetId("userName-input"),
            passwordInput: docGetId("password-input"),
            loginBtn: docGetId("login-input"),
            messageBox: docGetId("message-box"),
        };


        let getUserData = getItemsFromLocalStorage("userData");
        if (getUserData !== null) {
            formElement.emailInput.value = getUserData.email;
            formElement.passwordInput.value = getUserData.password;
        }

        formElement.emailInput.addEventListener("keyup", function() {
            setItemsToLocalStorage("userData", formElement.userNameInput.value, "", "");
        });
        formElement.loginBtn.addEventListener(
            "click",
            function() {
                let userNameInput = formElement.emailInput;
                let passwordInput = formElement.passwordInput;


                setItemsToLocalStorage("userData", userNameInput.value, "", "");


                let messageBox = formElement.messageBox;
                let isEmailInputEmpty = userName.value === "";
                let isPasswordInputEmpty = passwordInput.value === "";
                var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

                if (isuserNameInputEmpty) {
                    messageBox.classList.remove("d-none");
                    messageBox.innerHTML = "Your Email Input Is Empty.";
                    userNameInput.focus();
                } else if (isPasswordInputEmpty) {
                    messageBox.classList.remove("d-none");
                    messageBox.innerHTML = "Your Password Input Is Empty.";
                    passwordInput.focus();
                } else if (!userNameInput.value.match(mailformat)) {
                    messageBox.classList.remove("d-none");
                    messageBox.innerHTML = "Your Email Format Is Wrong.";
                    userNameInput.focus();
                } else {

                    let isEmailNotExist = userNameInput.value !== predefinedData.userName;
                    let isPasswordNotRight =
                        passwordInput.value !== predefinedData.password;
                    if (isEmailNotExist) {
                        messageBox.classList.remove("d-none");
                        messageBox.innerHTML = "Email doesn't Exist.";
                        userNameInput.focus();
                    } else if (isPasswordNotRight) {
                        messageBox.classList.remove("d-none");
                        messageBox.innerHTML = "Wrong Password.";
                        passwordInput.focus();
                    } else {
                        messageBox.classList.add("d-none");
                        setItemsToLocalStorage(
                            "userData",
                            userNameInput.value,
                            passwordInput.value,
                            predefinedData.userName
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