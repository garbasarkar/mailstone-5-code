// step-1
document.getElementById('deposit-click').addEventListener('click', function () {
    const newDepositAmount = getElementById('depusit-money-input');

    const priviousDepositTotal = getTextElementValueById('deposit-money');

    // calculate
    const newDepositTotal = priviousDepositTotal + newDepositAmount;
    // set deposit total value 

    setTextElementValue('deposit-money', newDepositTotal);
    // get previous balance by using the function 
    const previousBalance = getTextElementValueById('balance-money');
    const newBalanceTotal = previousBalance + newDepositAmount;
     setTextElementValue('balance-money', newBalanceTotal);

})