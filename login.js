//Step-1: Add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    /* Step-2: Get the email address inside the email input field,
    Always remember to use dot value to get text from an input field.*/

    const emailField = document.getElementById('user-email'); 
    const email = emailField.value;
    console.log(email);

    /* Step-3: Get the password
    ...................
    1. Step-a: Set the id on the HTML elements.
    2. Step-b: Get the element.
    3. Step-c: Get the value form the elements. */

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    //Very Danger: Do not verify email & password on the client side.
    //Step-4: Verify Email and Password and check user whether valid user or not.

    if(email === 'ashrafaupa@gmail.com' && password === '@tifaH3819'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui Password Vule Gecis, Ja Ajke Teke Tuke Tejjo Putro Gosana korlam');
    }
})