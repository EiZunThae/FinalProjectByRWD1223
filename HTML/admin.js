import {
    getItemsFromLocalStorage,
    docGetId,
    docCreate,
} from "./common_function.js";
window.addEventListener(
    "load",
    function() {
        let getUserData = getItemsFromLocalStorage("userData");


        let userNameElement = docGetId("user-name");
        userNameElement.innerHTML = `@${getUserData.userName} <br /><i class="#"></i>&nbsp;Primum`;
    },
    false
);