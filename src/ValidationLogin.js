const signUp = e => {
    let username = document.getElementById('signupUsername').value,
        email = document.getElementById('emailaddress').value,
        pwd = document.getElementById('signinpass').value;
        pwd = document.getElementById('signinpass2').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.username.toLowerCase() == username.toLowerCase() && 
            data.email.toLowerCase() == email.toLowerCase()
        );

    if(!exist){
        formData.push({ username, email, pwd});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('signupUsername').focus();
        alert("Account Created😁.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up bro🤨");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "src/Welcome-Page.html";
    }
    e.preventDefault();
}
