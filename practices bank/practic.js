function depusitFieltInput (inputField){
    const depusitAddInput = document.getElementById(inputField);
    const depusitAddInputString = depusitAddInput.value;
    const depusitAddInputNumber = parseFloat(depusitAddInputString)
    depusitAddInput.value = '';
    return depusitAddInputNumber;
}
function depusitAddMoney(depusitMoney){
    const moneyDeposit = document.getElementById(depusitMoney);
    const moneyDepositString = moneyDeposit.innerText;
    const moneyDepositNumber = parseFloat(moneyDepositString);
    return moneyDepositNumber;
}

function setmoney(depusitMoney, newValue){
    const setAddMoney = document.getElementById(depusitMoney);
    setAddMoney.innerText = newValue;
}

