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


// function text1(){
//     // setText('info1', 'I am form bangladesh');
//     const sum = toNumber('input');
//     console.log(sum);
// }
// function text2(){
//     setText('info2', 'My name is partha sarkar');
// }
// function text3(){
//     setText('info3', 'What do you do now')
// }

// function setText (id, text){
//     document.getElementById(id).innerText = text;
// }

// function toNumber (id){
//     const result = document.getElementById(id).value;
//     return parseInt(result);
// }

function text1(terget){
    console.log(terget.parentNode.childNodes)
}