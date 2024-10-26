const signup=document.getElementById('SignUp');
signup.addEventListener('click', function(e){
    e.preventDefault();
    let isValid=true;
    if(!checkErrorForName()){
        isValid=false;
    };
    if(!checkErrorForEmail()){
        isValid=false;
    };
    if(!checkErrorForPassword()){
        isValid=false;
    };
    if(!checkErrorForConfirmPassword()){
        isValid=false;
    };

    if(isValid){
    document.getElementById('message').textContent='Form submitted successfully.';
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('confirmPassword').value='';

}
});



function checkErrorForName(){
    const name = document.getElementById('name').value.trim();
    const errorName = document.getElementById('errorName');
    if(name.length < 8 || name.length > 12){
        errorName.textContent='Username mustbe in between 8 and 12 characters';
        isValid = false;
    }
    else if(name==''){
        errorName.textContent='Username cannot be empty';
        isValid = false;
    }
    else if(name.includes('!@#$%^&*()_+<>?/{}[]\\|`~-=',':;"\'')){
        errorName.textContent='Username cannot contain special characters';
        isValid = false;
    }
    else if(name.toLowerCase() === name){
        errorName.textContent='Must use at least one uppercase letter';
        isValid = false;
    }
    else if(name.includes(' ')){
        errorName.textContent='Username cannot contain spaces';
        isValid = false;
    }
    else if(name.toLowerCase().includes('12345678') || name.toLowerCase().includes('qwerty') || name.toLowerCase().includes('password') || name.toLowerCase().includes('admin') || name.toLowerCase().includes('username') ){
        errorName.textContent='Username must be a unique name';
        isValid = false;
    }
    else{
        errorName.textContent='';
        isValid = true;
    }
    document.getElementById('name').style.border=isValid ? "1px solid #ccc":"1px solid red";
    return isValid;
}

function checkErrorForEmail(){
    const email = document.getElementById('email').value.trim();
    const errorEmail = document.getElementById('errorEmail');
    if(!email.includes('@')){
        errorEmail.textContent='Please enter a valid email address';
        isValid = false;
    }
    else{
        errorEmail.textContent='';
        isValid = true;
    }
    document.getElementById('email').style.border=isValid? "1px solid #ccc":"1px solid red";
    return isValid;
}

function checkErrorForPassword(){
    const password = document.getElementById('password').value.trim();
    const errorPassword = document.getElementById('errorPassword');
    if(password.length < 8 || password.length > 24){
        errorPassword.textContent='Password must be in between 8 and 24 characters long';
        isValid = false;
    }
    else if(password.includes(' ')){
        errorPassword.textContent='Password cannot contain spaces';
        isValid = false;
    }
    else if(password.toLowerCase() === password  || password.toLowerCase() === password.toUpperCase()){
        errorPassword.textContent='Must use at least one uppercase letter and one lowercase letter';
        isValid = false;
    }
    else if(password.includes('12345678') || password.includes('qwerty') || password.includes('password') || password.includes('admin') || password.includes('username') ){
        errorPassword.textContent='Password must not contain common words';
        isValid = false;
    }
    else if (!(/[!@#$%^&*(),.?":{}|<>]/.test(password))) {
        errorPassword.textContent='Password must contain one special character';
        isValid = false;
    }
    else{
        errorPassword.textContent='';
        isValid = true;
    }
    document.getElementById('password').style.border=isValid? "1px solid #ccc":"1px solid red";
    return isValid;
}


function checkErrorForConfirmPassword(){
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorPasswordConfirm = document.getElementById('errorPasswordConfirm');
    if(confirmPassword!== password){
        errorPasswordConfirm.textContent='Passwords do not match';
        isValid = false;
    }
    else{
        errorPasswordConfirm.textContent='';
        isValid = true;
    }
    
    return isValid;
}
