function sayHello(){
    alert('Hello!!!');
}
console.log("===========================================");/*using method */
let buttonElement = document.getElementById('ClickButton');
buttonElement.onclick = function(){
    alert('Hello World!!!');
}
console.log("===========================================");/*Using function*/
function createPEle(){
    let pEleData = document.createElement('p');
    pEleData.textContent = 'This is a p element.';
    document.body.appendChild(pEleData); 
}
console.log("===========================================");/*Using addListener*/
let pElementData = document.getElementById('alertHi');
pElementData.addEventListener('click',function(){
    alert("Good Evening");
});

console.log("===========================================");
let  h1Ele = document.createElement('h1');
function showText(){
let inputElement = document.getElementById('showData');
    console.log(inputElement.value);
    h1Ele.textContent = inputElement.value;
    document.body.appendChild(h1Ele);
}

