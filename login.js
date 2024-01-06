// step-1: get the button element
document.getElementById('btn-submit').addEventListener('click', function (){
      // step-2: get user email
      // always remember to use. value to get the value of the input field
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;
        console.log (userEmail);
        // step-3: get user password
        const passwordField = document.getElementById('user-password');
        const userPassword = passwordField.value;
        console.log (userEmail, userPassword);
        //Danger: DO NOT VERIFY email and password on the client side
        // step-4: check email and password valid user or not
        if (userEmail == 'sifat@gmail.com' && userPassword == 'sifat22'){
            window.location.href = 'bank.html';
        }
        else{
            alert('wrong email or password');
        }
});

// javascript click on button go to another page

