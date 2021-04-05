let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let repwd = document.getElementById("repwd");
let phoneno = document.getElementById("phoneno");
let erroremail = document.getElementById("erroremail");
let errorpwd = document.getElementById("errorpwd");
let errorrepwd = document.getElementById("errorrepwd");
let errorphoneno = document.getElementById("errorphoneno");
let pwdlogin = document.getElementById("pwdlogin");


function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (email.value.match(regexp)) {

        if (pwdlogin.value.match(passw)) {

            return true;
        } else {
            errorpwd.innerHTML = "Invalid password";
            errorpwd.style.color = "red";
            pwdlogin.style.border = "1px solid red";
            return false;
        }


    } else {

        erroremail.innerHTML = "Invalid email address";
        erroremail.style.color = "red";

        email.style.border = "1px solid red";
        return false;
    }





}


function validate_signup() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phoneregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (email.value.match(regexp)) {

        if (pwd.value.match(passw)) {

            if (repwd.value === pwd.value) {

                if (phoneno.value.match(phoneregex)) {

                    return true;
                } else {

                    errorphoneno.innerHTML = "Invalid phone number";
                    errorphoneno.style.color = "red";
                    phoneno.style.border = "1px solid red";
                    return false;


                }

            } else {

                errorrepwd.innerHTML = "Passwords do not match";
                errorrepwd.style.color = "red";
                repwd.style.border = "1px solid red";
                return false;

            }

        } else {
            errorpwd.innerHTML = "Invalid password";
            errorpwd.style.color = "red";
            pwd.style.border = "1px solid red";
            return false;
        }


    } else {

        erroremail.innerHTML = "Invalid email address";
        erroremail.style.color = "red";
        email.style.border = "1px solid red";
        return false;
    }
}

var strength = {
    0: "Worst ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}

var password = document.getElementById('pwd');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
    var val = password.value;
    var result = zxcvbn(val);

    // Update the password strength meter
    meter.value = result.score;

    // Update the text indicator
    if (val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
    } else {
        text.innerHTML = "";
    }
});