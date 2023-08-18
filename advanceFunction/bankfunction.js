// step-3

document.getElementById('withdraw-click').addEventListener('click', function() {
    const withdrawAmount = getElementById('withdraw-money-input');
    // step-2 
    const withdrawMoney = getTextElementValueById('withdraw-money');
    // step- 3
    const newWithdrawTotal = withdrawMoney + withdrawAmount;
    setTextElementValue('withdraw-money', newWithdrawTotal);
    // step-5
    const priviousDepositMoney = getTextElementValueById('balance-money');
    // step-6 
    const priviousFinalMoney = priviousDepositMoney - newWithdrawTotal;
    // step-7
    setTextElementValue('balance-money', priviousFinalMoney)
})