let userInput = document.getElementById('myInput');
// console.log(userInput);
// alert("sdfijer");
let submitButton = document.getElementById('submit');

function Todo(){



}

Todo.prototype.AddItems = function(){
submitButton.addEventListener('click',onClick);

 let newLi = document.createElement("li");
 let list = document.getElementById("list");
 function onClick(){
   let inputValue = userInput.value;
  console.log(inputValue);
 
 list.style.backgroundColor="khaki";

 let newLi = document.createElement("li");
 newLi.className="pane";
 
 newLi.innerHTML=inputValue;
 
   list.appendChild(newLi);
   console.log("test 1");

   let cbtn = document.createElement('button');

   cbtn.className="cross-btn";
   cbtn.innerHTML="[x]";
   newLi.appendChild(cbtn);
 
   userInput.value=" ";

   cbtn.addEventListener("click",onCancel);
   function onCancel(){
       newLi.remove();
   }

 }

 }

   Todo.prototype.removeItem = function(){

 
let btnCancel = document.getElementById('cancelList');
btnCancel.addEventListener("click",onRemove);
function onRemove(){
  let list = document.getElementById('list');
  list.remove();
} 


  
// newLi.style.display="none";

}


   





  
    



    
toadd = new Todo();
toadd.AddItems();
// tocancel = new Todo();
// tocancel.CancelSingleItem();

toadd.removeItem();
