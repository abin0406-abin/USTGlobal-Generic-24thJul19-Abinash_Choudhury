let x = document.getElementById("biodataForm");
let createform = document.createElement('form');
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);

let namelabel = document.createElement('label');
namelabel.innerHTML = "Name ";
createform.appendChild(namelabel)
let nameinput = document.createElement('input');
nameinput.setAttribute("type", "text");
nameinput.setAttribute("name", "dname");
createform.appendChild(nameinput);

let linebreak1 = document.createElement('br');
linebreak1.setAttribute("line", "dline");
createform.appendChild(linebreak1);
createform.appendChild(linebreak1);
let linebreak2 = document.createElement('br');
linebreak2.setAttribute("line", "dline");
createform.appendChild(linebreak2);

let agelabel = document.createElement('label');
agelabel.innerHTML = "Age ";
createform.appendChild(agelabel);
let ageinput = document.createElement('input');
ageinput.setAttribute("type", "number");
ageinput.setAttribute("age", "dage");
createform.appendChild(ageinput);

let linebreak3 = document.createElement('br');
linebreak3.setAttribute("line", "dline");
createform.appendChild(linebreak3);
let linebreak4 = document.createElement('br');
linebreak4.setAttribute("line", "dline");
createform.appendChild(linebreak4);

let emaillabel = document.createElement('label');
emaillabel.innerHTML = "Email ";
createform.appendChild(emaillabel);
let emailinput = document.createElement('input');
emailinput.setAttribute("type", "email");
emailinput.setAttribute("email", "demail");
createform.appendChild(emailinput);

let linebreak5 = document.createElement('br');
linebreak5.setAttribute("line", "dline");
createform.appendChild(linebreak5);
let linebreak6 = document.createElement('br');
linebreak6.setAttribute("line", "dline");
createform.appendChild(linebreak6);

let DOBlabel = document.createElement('label');
DOBlabel.innerHTML = "Date of Birth:  ";
createform.appendChild(DOBlabel);
let DOBinput = document.createElement('input');
DOBinput.setAttribute("type", "date");
DOBinput.setAttribute("date", "ddate");
createform.appendChild(DOBinput);

let linebreak7 = document.createElement('br');
linebreak7.setAttribute("line", "dline");
createform.appendChild(linebreak7);
let linebreak8 = document.createElement('br');
linebreak8.setAttribute("line", "dline");
createform.appendChild(linebreak8);

let Genderlabel = document.createElement('label');
Genderlabel.innerHTML = "Gender  ";
createform.appendChild(Genderlabel);

let linebreak9 = document.createElement('br');
linebreak9.setAttribute("line", "dline");
createform.appendChild(linebreak9);
let linebreak10 = document.createElement('br');
linebreak10.setAttribute("line", "dline");
createform.appendChild(linebreak10);

let Genderinput1 = document.createElement('input');
Genderinput1.setAttribute("type", "radio");
Genderinput1.setAttribute("radio", "dradio");
createform.appendChild(Genderinput1);
let malelabel = document.createElement('label');
namelabel.innerHTML = "Male ";
createform.appendChild(malelabel);


let linebreak11 = document.createElement('br');
linebreak11.setAttribute("line", "dline");
createform.appendChild(linebreak11);
let Genderinput2 = document.createElement('input');
Genderinput2.setAttribute("type", "radio");
Genderinput2.setAttribute("radio", "dradio");
createform.appendChild(Genderinput2);
let linebreak12 = document.createElement('br');
linebreak12.setAttribute("line", "dline");

createform.appendChild(linebreak12);
let Genderinput3 = document.createElement('input');
Genderinput3.setAttribute("type", "radio");
Genderinput3.setAttribute("radio", "dradio");
createform.appendChild(Genderinput3);
let linebreak13 = document.createElement('br');
linebreak13.setAttribute("line", "dline");
createform.appendChild(linebreak13);