// Step: 1 button add kora 
document.getElementById('btn-submit').addEventListener('click', function() {
    // step: 2 email add kora 
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    // step: 4 email and password verify client site 
    if(email === 'parthasarkar327@gmail.com' && password === 'partha'){
        window.location.href = 'account.html'
    }else{
        alert('Toke ami teijjo sontan gosona korlam!!! tui password vule gessos.')
    }
})