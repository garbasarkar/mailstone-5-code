    // first step 
document.getElementById('btn-depojit').addEventListener('click', function () {
    // secound step 
    const depusitMoney = document.getElementById('depusit-money')
    const newDepusitValue= depusitMoney.value;
    const newDepusitValueString = parseFloat(newDepusitValue);
    // third step 
    const depositAddMoney = document.getElementById('deposit-add-money');
    // const previousTotalAmount = depositAddMoney.innerText = newDepusitValue;
    const previousTotalAmount = depositAddMoney.innerText;
    const previousTotalAmountString = parseFloat(previousTotalAmount)

    // step- 4
    const currentDepositTotal = previousTotalAmountString + newDepusitValueString;
    depositAddMoney.innerText = currentDepositTotal;

    // step: 5
    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const balanceStringChance = parseFloat(balanceString);

    // step: 6
    const balanceTotalCrrant = balanceStringChance + newDepusitValueString;
    // console.log(balanceTotalCrrant)

    balance.innerText = balanceTotalCrrant;
    // step: 7 
    document.getElementById('depusit-money').value = '';
})

// withdraw kor beta!!! Nahole taka tulte parbii na!!! 

// step: 1 
document.getElementById ('btn-withdraw').addEventListener('click', function () {
    // step: 2\
    const withdrawMoney = document.getElementById('withdraw-money');
    const newWithdrawMoneyString = withdrawMoney.value;
    const newWithdrawMoneyStringChance = parseFloat(newWithdrawMoneyString);

            // step: 7
            withdrawMoney.value = '';
            
    if(isNaN(newWithdrawMoneyStringChance)){
        alert('please provide a valid number');
        return;
    }
    // step: 3
    const previousWithdraw = document.getElementById('withdraw');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawStringChance = parseFloat(previousWithdrawString);

    // step : 5
    const balanceTotalElement = document.getElementById('balance');
    const balanceTotalElementstring = balanceTotalElement.innerText;
    const balanceTotalElementstringChance = parseFloat(balanceTotalElementstring);


   
    if(newWithdrawMoneyStringChance > balanceTotalElementstringChance){
        alert('Baap er pokete taka nai');
        return;
    }

         // step: 4
         const currentWithdrawTotal = previousWithdrawStringChance + newWithdrawMoneyStringChance;
         previousWithdraw.innerText = currentWithdrawTotal;
         
    // step: 6
    const totalWithdraw = balanceTotalElementstringChance - newWithdrawMoneyStringChance;
    balanceTotalElement.innerText = totalWithdraw;


    
})