// getElementById()
let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'This is new p tag';
console.log("===================================================");
// getElementByClassName()
var divElements = document.getElementsByClassName('blue');
console.log(divElements);
console.log("====================================================");
// getElementsByTagName()
let pElements = document.getElementsByTagName('p');
console.log(pElements);
console.log("====================================================");
// getElementsByName(' ')
let nameElements = document.getElementsByName('helement');
console.log("nameElements",nameElements);
console.log("====================================================");
//querySelector(' ')
let demoElement = document.querySelector('#demo');
console.log("demoElements",demoElement);
console.log("====================================================");
// querySelectorAll(' ')
let blueClassELement = document.querySelectorAll('blue');
console.log("classElements",blueClassElement);
console.log("====================================================");
// createElement(' ')
let buttonElement = document.createElement('Button');
buttonElement.textContent = "Click Me";
console.log(buttonElement);
// appendChild(buttonElement) //For adding the element to DOM
document.body.appendChild(buttonElement);
let spanEle = document.getElementById('spanid');
spanEle.style.color = 'blue';
let buttonElement1 = document.getElementById('buttonElement');
// buttonElement1.className='add';
buttonElement1.classList="add add1";


console.log("====================================================");
document.getElementById('tableid').innerHTML=
`<table>
    <tr>
        <td>Name</td>
        <td>Age</td>
    </tr>
    <tr>
        <td>Jhon</td>
        <td>22</td>
    </tr>
    <tr>
        <td>Guldu</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Sundra</td>
        <td>14</td>
    </tr>
    <tr>
        <td>Dinga</td>
        <td>26</td>
    </tr>
</table>`;
console.log("====================================================");
let pEleData = document.getElementById('demo1');
// pEleData.style.color = 'blue';
// pEleData.className = 'blue';/*for calling the data using class name */
pEleData.classList = 'blue fonts';/* */
