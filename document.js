// console.log('adding js inside the html file');
// console.log(document);
// const jsTest = document.getElementsByTagName('li');
// // console.log(jsTest);
// for(const li of jsTest){
//     // console.log(li.innerText);
// }

// const allheadings = document.getElementsByTagName('h1');
// // console.log(allheadings);
// for(let text of allheadings){
//     // console.log(text.innerText);
// }
// // document.getElementById('special').innerText

// const places = document.getElementsByClassName('dom');
// for(const item of places){
//     console.log(item.innerText)
// }

// const chance = document.getElementById('special');
// chance.innerText = 'My name is partha sarkar';
// console.log(chance.innerText);
// chance.setAttribute('chance', 'Distiect Satkhira')

// const select = document.querySelectorAll('.list-container li').style.alignItems = 'center';
// console.log(select);
// for(let items of select){
//     console.log(items.innerText)
// }

// const sections = document.querySelectorAll('section');
// // console.log(sections);
// for(const sector of sections){
//     sector.style.border = '2px solid red';
//     sector.style.marginBottom = '10px';
//     sector.style.borderRadius = '20px';
//     sector.style.backgroundColor = 'lightgray';
// }

// const pelecContainer = document.getElementById('dom');
// pelecContainer.classList

// I will practices yourself 

// const liText = document.querySelectorAll('li');
// console.log(liText);
// const className = document.getElementsByClassName('container')
// className.style.backgroundColor = 'black';

// console.log(className);
// const specialId = document.getElementById('special-element');
// // console.log(specialId);
// specialId.style.color = 'red';
// specialId.style.backgroundColor = 'gray';
// specialId.style.textAlign = 'center';

// const liListAdd = document.getElementById('special-elements');
// const liAdd = document.createElement('li');
// liAdd.innerText = 'My name is partha sarkar';
// liListAdd.appendChild(liAdd);
// console.log(liListAdd);


// const newSection = document.getElementById('main-container');
// const sectionCreate = document.createElement('section');
// sectionCreate.innerHTML = `
// <h1>Document object model</h1>
// <ul>
//     <li>Partha sarkar</li>
//     <li>Kanulal sarkar</li>
//     <li>Ashima sarkar</li>
//     <li>Pobitro sarkar</li>
// </ul>
// `;
// newSection.appendChild(sectionCreate);
// console.log(newSection);


// const node = document.getElementById('special-element');
// console.log(node);


// const tagName = document.getElementsByTagName('li');
// // console.log(tagName)
// for(let item of tagName){
//     console.log(item.innerText)
// }

// const allHeading = document.getElementsByTagName('h1');
// for(let head of allHeading){
//     console.log(head.innerText)
// }

// const container = document.querySelectorAll('#special-element-2 li')
// for(let li of container){
//     console.log(li.innerText)
// }

// const container = document.getElementById('special-element-2');
// container.style.color = 'red';
// console.log(color.innerText);

// const kds = document.getElementById('kds');
// const add = kds.classList.add('partha');
// console.log(add)

// const mainContainer = document.getElementById('main-container');
// const elementAdd = document.createElement('h1');
// elementAdd.innerText = 'how are you';
// mainContainer.appendChild(elementAdd);
// const inerhtml = document.createElement('section');
// inerhtml.innerHTML = `
// <h1>Document Object Model</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sint ut? Sequi similique nostrum consequatur impedit debitis molestiae unde hic!</p>
// <ul>
// <li>Home</li>
// <li>About</li>
// <li>Services</li>
// <li>Development</li>
// </ul>
// <button>Click Me</button>
// `
// mainContainer.appendChild(inerhtml);

// const mainContainer = document.getElementById('container2');
// const childern = mainContainer.children;
// console.log(childern);

// const con = document.getElementById('kds');
// con.style.textAlign = 'center';
// con.style.color = 'red';
// // con.getAttribute('class')
// // con.classList.remove('sum')
// con.setAttribute('con', 'tooltip set by javascript');
// console.log(con)

// const special = document.getElementById('special-element-2');
// special.style.color = 'blue';
// special.style.textAlign = 'center';
// special.style.listStyle = 'none';
// special.style.fontSize = '2rem';
// special.style.backgroundColor = 'gray'
// console.log(special.innerText)

// const special = document.getElementById('container2');
// special.childNodes;
// console.log(special)

// const special = document.getElementById('kds');
// special.setAttribute('special', 'tooltip set by javascript')
// console.log(special.innerText)

// module 25 mailstone 5 

// function makeMed(){
//     document.body.style.backgroundColor = 'red';
// }

// const makeBlueButton = document.getElementById('made-blue');
// makeBlueButton.onclick = makeBlue;

// function makeBlue(){
//     document.body.style.backgroundColor = 'blue'
// }

// const makePurple = document.getElementById('make-purple');
// makePurple.onclick = function makePurple(){
//     document.body.style.backgroundColor = 'purple';
// }

// const pinButton = document.getElementById('makePink');
// pinButton.addEventListener('click', makePinks)

// function makePinks (){
//     document.body.style.backgroundColor = 'pink';
// }

// const makeGreen = document.getElementById('makeGreen');
// makeGreen.addEventListener('click', function makeAdd (){
//     document.body.style.background = 'green';
// })

// // we will use this importent 
// document.getElementById('make-golden').addEventListener('click', function (){
//     document.body.style.backgroundColor = 'goldenrod' 
// })



// function handleOnClick (){
//     // console.log('button clicked');
//     const textChance = document.getElementById('textChance');
//     textChance.innerText = 'Handled by function attached on onclick attribute';
// }

// document.getElementById('addecent').addEventListener('click', function () {
//     const textChance = document.getElementById('textChance');
//     textChance.innerText = 'My name is partha sarkar';
// })


// document.getElementById('event-lestener').addEventListener('click', function() {
//     const input = document.getElementById('input');
//     const inputtext = input.value;
//     const p = document.getElementById('chance');
//     p.innerText = inputtext;
//     input.inputText = '';
// })



    // first step 
// document.getElementById('comment').addEventListener('click', function () {
//     const commonBox = document.getElementById('common-text');
//     const inText = commonBox.value;


//     const createTag = document.getElementById('container');
//     const tag = document.createElement('p');
//     tag.innerText = inText;

//     createTag.appendChild(tag);
//     commonBox.value = '';
// })

// document.getElementById('input').addEventListener('keyup', function (event){
//     const text = event.target.value;
//     const deleteButton = document.getElementById('events')
//     if(text === 'delete'){
//         deleteButton.removeAttribute('disabled')
//     }
//     else{
//         deleteButton.setAttribute('disabled',true)
//     }
// })
// document.getElementById('events').addEventListener('click', function () {
// const cecret = document.getElementById('cecret');
// cecret.style.display ='none'
// })


// const loop = document.getElementById('item');
// for(let item of loop){
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target)
//     })
// }

// document.getElementById('parentItem').addEventListener('click', function (event) {
//     // console.log(event.target);
//     event.target.parentNode.removeChild(event.target);
// })

// document.getElementById('btn-btn').addEventListener('click', function(){
//     const listContainer = document.getElementById('parentItem');
//     const li = document.createElement('li');
//     li.innerText = 'Brand New Item added';
//     li.classList.add('item');
//     listContainer.appendChild(li)
// })


// document.getElementById('control').addEventListener('click', function (event){
//     event.target.parentNode.removeChild(event.target);
// })

// document.getElementById('btn').addEventListener('click', function () {
//     const control = document.getElementById('control');
//     const p = document.createElement('p');
//     p.innerText = 'My name is partha sarkar';
//     p.classList.add('item');
//     control.appendChild(p);
// })



// document.getElementById('btn-btn').addEventListener('click', function(){
//     const message = document.getElementById('message');
//     const vaule = message.value;

//     const addText = document.getElementById('addText');
//     const p = document.createElement('p');
//     p.innerText = vaule;
//     addText.appendChild(p);
//     message.value = '';

// })


// document.getElementById('input').addEventListener('keyup', function (event) {
//     const textReturn = event.target.value;
//     const deletes = document.getElementById('delete');
//     if(textReturn.length > 3){
//         deletes.removeAttribute('disabled')
//     }else{
//         deletes.setAttribute('disabled', true);
//     }
// })

// document.getElementById('delete').addEventListener('click', function () {
//     const js = document.getElementById('js');
//     js.style.display = 'none';
// })


// document.getElementById('message-area').addEventListener('keyup', function (event) {
//     const events = event.target.value;
//     const message = document.getElementById('message-area').value;
//     const deletes = document.getElementById('comment')
//     if(message.length > 4){
//         deletes.removeAttribute('disabled')
//     }else{
//         deletes.setAttribute('disabled', true);
//     }

// })
// document.getElementById('comment').addEventListener('click', function (){
//     const messageArea = document.getElementById('message-area'); 
//     const messageAdd = messageArea.value;

//     const sectionUp = document.getElementById('section-create');
//     const pTag = document.createElement('p');
//     pTag.innerText = messageAdd;
//     messageArea.value = '';
//     sectionUp.appendChild(pTag);
// })


// document.getElementById('majik').addEventListener('click', function() {
//     const input = document.getElementById('input');
//     const textAdd = input.value;
//     const chanceAdd = document.getElementById('text');
//     chanceAdd.innerText = textAdd;
//     input.inputtext = '';
// })


// concepsiual session practices 
// first problem consepcual session 

// let count = 0;
// function clickMe(){
//     const element = document.getElementById('count')
//     count += 1;
//     element.innerText = count;
// }
// document.getElementById('decrement').addEventListener('click', function (){
//     const element = document.getElementById('count');
//     count -= 1;
//     if(count === 0){
//         return alert('Please provide ma a valid positive number')
//     }
//     element.innerText = count;
// })


let incre = 0;
function increment(){
    const increment = document.getElementById('count');
    incre += 1;
    increment.innerText = incre;
}
document.getElementById('decrement').addEventListener('click', function(){
    const increment = document.getElementById('count');
   incre -= 1;
    if(incre === 0){
        alert('please provide your valid positive number')
    }
   increment.innerText = incre;
})
// let incr = 0;
// function decrement(){
//     const increment = document.getElementById('count');
//     incr -= 1;
//     if(incr === 0){
//         return 'please provide your valid positive number'
//     }
//     increment.innerText = incr;
// }
// secoud quote
// let incres = 0;
// function increments(){
//     const increments = document.getElementById('count');
//     incres += 1;
//     increments.innerText = incres;
// }
// let incress = 0;
// function incrementss(){
//     const increment = document.getElementById('count');
//     incress += 1;
//     increment.innerText = incress;
// }

// secoud problem comcepsual section 

// const quotes = [
//     {quote: 'the only way to do great work is to love what you do.',
//     person: 'steve jobs'
// },
//     { quote: "The journey of a thousand miles begins with one step.",
//     person: "Lao Tzu"
// },
//     {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
//       person: "Nelson Mandela"
// },
//     {quote: "Innovation distinguishes between a leader and a follower.",
//     person: "Steve Jobs"
// },
//     {quote:"Success is walking from failure to failure with no loss of enthusiasm.",
//       person: "Winston Churchill"
// },
//     {quote:"The future belongs to those who believe in the beauty of their dreams.",
//       person: "Eleanor Roosevelt"
// },
//     {quote: "The only way to do great work is to love what you do.",
//     person: "Steve Jobs"
// },
//     {quote: 'the only way to do great work is to love what you do.',
//     person: 'steve jobs'
// },
// {
//     quote: "Don't be afraid to give up the good to go for the great.",
//     person: "John D. Rockefeller"
// },
// {
//     quote: "Strive not to be a success, but rather to be of value.",
//     person: "Albert Einstein"
// }
// ]

// document.getElementById('btn').addEventListener('click', function () {
//     const quotea = document.getElementById('quote');
//     const persona = document.getElementById('person');
//     persona.style.color = 'red';
//     persona.style.fontSize = '25px'
//     const randomQuote = Math.floor(Math.random() * quotes.length);
//     // console.log(randomQuote)
//     // console.log(quotes[randomQuote].quote);
//     // console.log(quotes[randomQuote].person);
//     quotea.innerText = quotes[randomQuote].quote.toLowerCase();
//     persona.innerText = quotes[randomQuote].person.toUpperCase();

// })


// const ul = document.querySelectorAll('#item');
// const ul = document.querySelector('.container');
// console.log(ul.children[1].innerText)

// const li = document.querySelectorAll('.ul-item');


// document.getElementById('submit').addEventListener('click', function () {
//     const textarea = document.getElementById ('textarea');
//     const textValue = textarea.value.toUpperCase();
//     const output = document.getElementById('container');
//     output.style.color = 'red';
//     output.style.fontSize = '40px';
//     output.innerText = textValue;
//     document.getElementById ('textarea').value = '';
// });

// document.getElementById('textarea').addEventListener ('keyup', function(event){
//     // console.log(event.target.value)
//     if(event.key === 'Enter'){
//     const text = document.getElementById('textarea');
//     const value = text.value;
//     const p = document.getElementById('container');
//     p.style.color = 'blue';
//     p.style.fontSize = '35px'
//     p.innerText = value;
//     text.value = '';
//     }
// })