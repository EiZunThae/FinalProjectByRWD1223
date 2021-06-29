window.addEventListener(
    "load",
    function() {


        if (typeof Storage !== undefined) {
            let getUserData = localStorage.getItem("userData");
            let createUserData = { userName: "", password: "" };
            if (getUserData === null) {
                localStorage.setItem("userData", JSON.stringify(createUserData));
            }
        }
    },
    false
);