import { docGetId, getItemsFromLocalStorage } from "./common_function.js";
window.addEventListener(
    "load",
    function() {
        let headerElement = {
            parent: docGetId("hearder-element"),
            loginBtn: docGetId("login-btn"),
            logoutBtn: docGetId("logout-btn"),
            profileBtn: docGetId("profile-btn"),
        };

        let getUserData = getItemsFromLocalStorage("userData");
        let isUserNameExist = null;
        if (getUserData !== null) {
            isUserNameExist = getUserData.userName;
        } else {
            isUserNameExist = null;
        }
        if (isUserNameExist) {
            headerElement.loginBtn.classList.add("d-none");
            headerElement.logoutBtn.classList.remove("d-none");
            headerElement.profileBtn.classList.remove("d-none");
        } else {
            headerElement.loginBtn.classList.remove("d-none");
            headerElement.logoutBtn.classList.add("d-none");
            headerElement.profileBtn.classList.add("d-none");
        }


        /*Click logoutBtn  */

        headerElement.logoutBtn.addEventListener(
            "click",
            function() {
                localStorage.removeItem("userData");
            },
            false
        );
    },
    false
);