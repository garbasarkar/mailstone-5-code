document.getElementById('deposit-click').addEventListener('click', function () {
    const newInputMoney = depusitFieltInput('depusit-money-input');
    const previousMoney = depusitAddMoney('deposit-money');
    const currentMoney = previousMoney + newInputMoney;
    const setMoneyAdd = setmoney('deposit-money', currentMoney);

    const priviousBalance = depusitAddMoney('balance-money');
    const totalPriviousMoney = priviousBalance + newInputMoney;
    setmoney('balance-money', totalPriviousMoney)
})
