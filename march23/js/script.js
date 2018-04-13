//variables
var nav = document.getElementById("nav");
var header = prompt("what is your name");

var  text = document.getElementById("text");
var a01 = document.getElementById("a01");
var a02 = document.getElementById("a02");
var btn1 = document.getElementById("btn1");
var btn2 = "teal";
var btn3 = document.style.color("red");
var fontsize = document.style.fontSize("50px");





//eventlisteners
a01.addEventListener("click");
a02.addEventListener("click");
btn1.addEventListener("click" );
btn2.addEventListener("click");
btn4.addEventListener("click");




//functions
function welcome() {
document.getElementById("name").innerHTML = header;
}

function newColor(){
document.body.style.backgroundColor = btn2;
}

function textColor (){
a01.body.style.color = "red";

}

// function user() {
// document.getElementById("name").style.color("red");
 
//  }