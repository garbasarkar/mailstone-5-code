let total = 0;
function handleCLikBtn(target){
    const selated = document.getElementById('selected-items')
    const textTarget = target.parentNode.childNodes[1].innerText;
    const create = document.createElement('li');
    const li = create.innerText = textTarget;
    const result = selated.appendChild(li);

    const money = target.parentNode.childNodes[5].innerText.split(' ')[1];
    total = parseInt(total) + parseInt(money);
    document.getElementById('total').innerText = total;
}