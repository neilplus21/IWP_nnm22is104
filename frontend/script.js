function loginPage() {
    window.location.href="login.html";
}
function signupPage() {
    window.location.href="signUp.html";
}

function validate(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var conf_password = document.getElementById("conf_password").value;

    var check_username = new RegExp("^[a-zA-Z0-9_-]{3,16}$");
    var checkemail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");
    var checkpassword = new RegExp("^[a-zA-Z0-9 _]{6,16}$");

    if(email == ""){
        alert("Email feild is empty");
        return false;
    }else if(!checkemail.test(email)){
        alert("Invalid Email ID");
        return false;
    }

    if(username == ""){
        alert("Username feild is empty");
        return false;
    }else if(!check_username.test(username)){
        alert("Invalid username\nShould contain more than 3 alpha-numeric character,'-' and '_' only");
        return false;
    }

    if(password == ""){
        alert("Password feild is empty");
        return false;
    }else if(conf_password == ""){
        alert("Password confirmation feild is empty");
        return false;
    }else if(!checkpassword.test(password)){
        alert("Invalid password\nShould contain more than 6 alpha-numeric character,' ' and '_' only");
        return false;
    }else if(password != conf_password){
        alert("Password doesn't match");
        return false;
    }

    window.location.href="registered.html";
}