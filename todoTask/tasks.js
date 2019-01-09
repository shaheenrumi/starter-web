let heading = document.getElementById('head');
heading.style.textAlign = "center";
heading.style.color = "red";
heading.style.fontWeight = "2rem";

let input_tag = document.getElementById('input');
input_tag.style.lineHeight = "30px";
input_tag.style.width = "400px";
input_tag.style.backgroundColor = "pink";

// add event listener to add button

document.querySelector('#add-list').addEventListener('click',function addItem(){
    let ul = document.getElementById("input-list");
    let input = document.getElementById("input");
    let li = document.createElement("li");
    li.setAttribute('id',input.value);
    if(input.value === ""){

    }

    
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    if (input.value === "") 
    {
        alert("enter any value!");
    }
   
    let crossbtn =  document.createElement('button');
    crossbtn.id = "btn";
    crossbtn.innerText = "X";
    li.appendChild(crossbtn);

    crossbtn.addEventListener("click" ,removeItem);
    function removeItem(){
    let ul = document.getElementById("input-list");
    let input = document.getElementById("input");
    let item = document.getElementById(input.value);
    ul.removeChild(item);
    //console.dir(input);
    // input.value = "";
  }

 });

    







// // this keyword
// // object literal
// const brad ={
//     name: "Brad",
//     age: 30,
// }

// console.log(brad);
// console.log(brad.age);

// // multiple instances of a object constructor

// function Person(name,age){ // should start capital
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// // istances of object person
// const shah = new Person("shaheen" , 12-24-1994);
// const ali = new Person("Aliya", 12-45-45);
// // EventListner

// document.querySelector




