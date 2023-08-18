// step-1 submit- click button add kora             // part number--1

document.getElementById('submit-click').addEventListener('click', function () {
    // step-2 input text add kora 
    const userEmail = document.getElementById('userEmail');
    const userEmailValue = userEmail.value;
    // step-3 input password add kora 
    const userPassword = document.getElementById('userPassword');
    const userPasswordValue = userPassword.value;
    // step-4 condition add korte hobe 
    if(userEmailValue === 'garbasarkar@gmail.com' && userPasswordValue === 'garbasarkar'){
        window.location.href ='preaccount.html';
    }else{
        alert('Tui password vule gecish!!! Tore ami tarjjo sontan bole ghosone korlam');
    }
})