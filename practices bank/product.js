document.getElementById('discount-click').addEventListener('click', function(){
    const price = 1000;
    const disCount = 400;
    const result = price - disCount;
    const productPrice = document.getElementById('code');

    console.log(productPrice);
    if(productPrice.value === 'code'){
        const show = document.getElementById('div');
        const h = document.createElement('h1');
        h.innerText = result;
        show.appendChild(h);
    }else{
        alert('Tor cupon code sothik hoii ne!!!')
    }
})

// function product(){
//     const price = 1000;
//     const result = price - 300;
//     const show = document.getElementById('div');
//     const h = document.createElement('h1');
//     h.innerText = result;
//     show.appendChild(h);
// }

// function discountCode () {
    

// }