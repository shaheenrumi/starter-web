//elem.hasAttribute(name) – to check for existence.
let listItem = document.getElementsByClassName('list');
listItem[0].style.color = "purple";
listItem[0].style.textAlign = "center";
listItem[0].style.decoration = "none";
listItem[0].style.padding = "0";
listItem[0].style.marginTop = "3rem";

let b = listItem[0].hasAttribute('id');
console.log(b);

 // to get attribute
let c = listItem[0].getAttribute("id");
 console.log(c);

listItem[0].setAttribute('Test', 123);
console.log(listItem[0]);

listItem[0].setAttribute('type' , 345);
console.log(listItem[0]);

// listItem[0].removeAttribute('type');
// console.log(listItem[0]);




let links = document.querySelectorAll('#links');
links[0].style.textAlign = "center";
links[0].style.padding = "0";
links[0].style.marginTop = "20px";
links[0].lastElementChild.style.color = "orange"
links[0].children[0].style.color = "red";


const lis = document.getElementsByTagName('li');
console.log(lis);

lis[0].style.color = "red";
lis[2].style.fontSize = "2rem";
lis[1].style.color = "yellow";

const link = document.getElementsByTagName('a');
link[0].style.color = "orange";
link[2].style.color = "purple";




