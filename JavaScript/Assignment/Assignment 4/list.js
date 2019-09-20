let unOrderedList = document.createElement('ul');
let list1 = document.createElement('li');
list1.textContent="Abinash";
let list2 = document.createElement('li');
list2.textContent="Pratik";
let list3 = document.createElement('li');
list3.textContent="Nikhil";
let list4 = document.createElement('li');
list4.textContent="Karan";

unOrderedList.appendChild(list1);
unOrderedList.appendChild(list2);
unOrderedList.appendChild(list3);
unOrderedList.appendChild(list4);

document.body.appendChild(unOrderedList);
console.log("=========================================")
console.log("Ordered List");
console.log("=========================================")

let OrderedList = document.createElement('ol');
let List1 = document.createElement('li');
List1.textContent="Abinash";
let List2 = document.createElement('li');
List2.textContent="Pratik";
let List3 = document.createElement('li');
List3.textContent="Nikhil";
let List4 = document.createElement('li');
List4.textContent="Karan";

OrderedList.appendChild(List1);
OrderedList.appendChild(List2);
OrderedList.appendChild(List3);
OrderedList.appendChild(List4);

document.body.appendChild(OrderedList);

