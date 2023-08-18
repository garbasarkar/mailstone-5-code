// document.getElementById('addTask').addEventListener('click', function () {
//     const inputAdd = document.getElementById('inputText');
//     const inputAddValue = inputAdd.value;
//     const olitem = document.getElementById(olitem);
//     const textAdd = document.createTextNode(inputAddValue);
//     const newItem = document.createElement('li');
//     // const createText = newItem.innerText;
//     createText.innerText = inputAddValue
//     newItem.appendChild(textAdd);
//     olitem.appendChild(newItem);
// });

function getElement() {
    const multi = chanceStrToNum('money')
    const secMulti = ((multi - 10) / multi) * multi;
    moneyAddReplace('total', multi)
    moneyAddReplace('discountManey', secMulti)
}
function secondFunc() {
    const secoundMAdd = chanceStrToNum('secoundMoney');
    const secTotal = chanceStrToNum('money');
    const secAllTotal = secoundMAdd + secTotal;
    // console.log(secAllTotal)
    const secDiscout = ((secAllTotal - 10) / secAllTotal) * secAllTotal;
    console.log(secDiscout)
    // moneyAddReplace('total', secAllTotal);
    // moneyAddReplace('discountManey', secDiscout);

}
function thirdHandelFun() {
    const thirdFunc = chanceStrToNum('thirdMoney');
    const second = chanceStrToNum('secoundMoney');
    const first = chanceStrToNum('money');
    const totalFinal = thirdFunc + second + first;
    moneyAddReplace('total', totalFinal);
}

function chanceStrToNum(numCOn) {
    const moneyAdd = document.getElementById(numCOn);
    const moneyNum = moneyAdd.innerText;
    const moneyString = parseFloat(moneyNum);
    return moneyString;
}

function moneyAddReplace(location, moneyAdd) {
    const totalReplace = document.getElementById(location);
    totalReplace.innerText = moneyAdd; 
}