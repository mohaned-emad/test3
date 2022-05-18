document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});

function special(password){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
}
function validation_log(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result = email.includes("@");
    let first = password.charCodeAt(0);
    let length = password.length;

    if(result == true && (first >= 65 && first <= 90) && special(password) == true && length >= 8 && password.includes(" ") == false){
        alert("login successfully");
        window.location = "home.html";
    }
    else{
        alert("login unsuccessful");
        window.location = "index.html";
    }
}
function validation_sign(){
    let email2 = document.getElementById("email2").value;
    let password2 = document.getElementById("password2").value;
    let result2 = email2.includes("@");
    let first2 = password2.charCodeAt(0);
    let length2 = password2.length;
    let phone = document.getElementById("mobile").value;
    let phonel = phone.length;

    if(result2 == true && (first2 >= 65 && first2 <= 90) && special(password2) == true && length2 >= 8 && password2.includes(" ") == false && phonel == 11){
        if(document.getElementById('male').checked) {
            alert("Sign up successfully, returning to sign in page");
            window.open = "index.html";
        }
        else if(document.getElementById('female').checked) {
            alert("Sign up successfully, returning to sign in page");
            window.open = "index.html";
        }
        else{
            alert("Sign up unsuccessful");
            e.preventDefault();
            window.location = "index.html";
        }
        
    }
    else{
        alert("Sign up unsuccessful");
        e.preventDefault();
        window.location = "index.html";
    }
}