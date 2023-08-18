document.getElementById('withdraw-click').addEventListener('click', function () {
    const withdrawAddInput = depusitFieltInput('withdraw-money-input');
    const withdrawAddMoney = depusitAddMoney('withdraw-money');
    const totalWithdrawMoney = withdrawAddMoney + withdrawAddInput;
    const getwWithdraw = setmoney('withdraw-money', totalWithdrawMoney);

    const withdrawBalance = depusitAddMoney('balance-money');
    const fialdWithdraw =  withdrawBalance - withdrawAddInput;
    setmoney('balance-money', fialdWithdraw);
})