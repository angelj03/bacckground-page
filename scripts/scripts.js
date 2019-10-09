  //document.getElementsByTagName('tagName');
  //document.getElementsByClassName('className');
  //document.getElementById('id');
  //[0] from arrays

  //document.querySelector('');
  //document.querySelectorAll('');
  //document.getAttribute('');
  //document.setAttribute('');
 //document.querySelector('').getAttribute("");

//DOM EVENTS

//var button = document.getElementsByTagName("button")[0];
//button.addEventListener("click", function(){
//  console.log("Click");
//});

//mouseenter, mouseleave in EVENTS






// function doneToggle(){
//   li[i].done.add;
//   li[i].done.toggle;
// }


var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');
var togglys = document.getElementsByClassName("done");

function doneAdd(){
for (var b = 0; b < li.length; b++) {
  li[b].classList.add("done");
  li[b].classList.toggle("done");
}};


function inputLength() {
  return input.value.length;
};

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.setAttribute("class", "done");
  li.classList.toggle("done");
  ul.appendChild(li);
  input.value= "";
};


// function doneToggle(){
//
//
// }






function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    togglys = document.getElementsByClassName("done");
  };
};

function addListAfterKeyPress(event){
  if (inputLength() > 0 && event.keyCode === 13) {
  createListElement();
  togglys = document.getElementsByClassName("done");
  };
};

doneAdd();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
togglys[0].addEventListener("click", console.log("runs"));
