// step-1 deposit-click button add korate hobe          // part number--2

document.getElementById('deposit-click').addEventListener('click', function () {
    // step-2 depusit-money-input add korte hobe 
    const depusitMoneyInput = document.getElementById('depusit-money-input');
    const depositInput = depusitMoneyInput.value;
    const depositInputNumber = parseFloat(depositInput);

    // step-3 deposit-money add korte hobe 
    const depositMoney = document.getElementById('deposit-money');
    const depositString = depositMoney.innerText;
    const depositStringChance = parseFloat(depositString);

    // step- 4 totalmoneyNumber 
    const currentTotal = depositInputNumber + depositStringChance;
    depositMoney.innerText = currentTotal;

    // step-5 Balance add korte hobe 
    const balanceMoney = document.getElementById('balance-money');
    const balanceString = balanceMoney.innerText;
    const balanceNumber = parseFloat(balanceString);

    // step-6 balance total money add korte hobe 
    const balanceMoneyTotal = balanceNumber + depositInputNumber;
    balanceMoney.innerText = balanceMoneyTotal;

    // step-7 input value finish 
    depusitMoneyInput.value = '';
})

// step-1 withdraw-click button add korte hobe      //part number--3

document.getElementById('withdraw-click').addEventListener('click', function (){
    // step-2 withdraw-money-input add korte hobe 
    const withdrawMoneyInput = document.getElementById('withdraw-money-input');
    const withdrawMoneyInputString = withdrawMoneyInput.value;
    const withdrawMoneyInputNumber = parseFloat(withdrawMoneyInputString);
    console.log(withdrawMoneyInputNumber);

    // step-3 withdraw-money add korte hobe 
    const withdrawMoney = document.getElementById('withdraw-money');
    const withdrawMoneyString = withdrawMoney.innerText;
    const withdrawMoneyNumber = parseFloat(withdrawMoneyString);
    console.log(withdrawMoneyNumber);
     
    // step-5 balance-money add korte hobe 
    const balanceMoneys = document.getElementById('balance-money');
    const balanceStrings = balanceMoneys.innerText;
    const balanceNumbers = parseFloat(balanceStrings); 

    if(withdrawMoneyInputNumber > balanceNumbers){
        alert('Tor takar poriman bashi hoye gecha!!! Amar banka ato taka nai!!!');
        // step-7 
        withdrawMoneyInput.value = '';
        return;
    }

    // step-4 withdrawMoneyTotal 
    const currentWithdrawManey = withdrawMoneyInputNumber + withdrawMoneyNumber;
    withdrawMoney.innerText = currentWithdrawManey;
    // step-6 
    const currentWithdraw = balanceNumbers - withdrawMoneyInputNumber ;
    balanceMoneys.innerText = currentWithdraw;

    // step-7 
    withdrawMoneyInput.value = '';
})