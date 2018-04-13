// var p1 = document.getElementById("p1");
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pCLass = document.querySelector('.p');
// console.log(pCLass);

// var pLast = document.querySelector('p:last-of-type');
// console.log(pLast);
// var pCLasses = document.querySelectorAll('.p');
// console.log(pCLasses);
// pCLasses[2].style.fontSize = "8px";
// pCLasses[1].style.color = "red";

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);

// pByClassname[0].style.fontSize = "32px";

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// pByTagname[9].style.color = "yellow";

// console.log(pByTagname.length);

// for(var i = 0; i< 10 ; i++){
//     pByTagname[i].style.color = "red";
//     console.log(i);
// }


// var myName = "Roberto";
// console.log(myName.length);

// for(var i = 0 ; i < myName.length; i++){
//     console.log(i);
// console.log(myName[i]);
// }


// var userName = prompt("What is your name");
// console.log(userName.length);

// for(var i =0 ; i<userName.length; i++){
// console.log(userName[i]);
// }

// function getusername(){
// var username = prompt ("your name");
// console.log (username + 'from inside the function');
// printusername(username);
// }


// getusername ();


// function printusername(x){
//     console.log(x);
// for(var i= 0; i < x.length  ; i++){
//     console.log( x [i]);
// }
// }


// function getuserNums (){
// var num1 = prompt("Enter a number");
// var num2 = prompt("Enter another number");
// adduserNums(num1 , num2); 

// }

// function adduserNums (x, y){
// alert(  parseInt(x) + parseInt(y));
// }

// getuserNums();
var paragraphs = document.querySelectorAll('p');
function color (){
    var userColors = prompt("pick some colors (comma seperate");
    console.log(userColors);
    var userTrimColor = [];
    for(var i =0 ; i < usercolors.length; i++)
    // console.log(userColors.split (',').trim())
// var color1 = prompt("pick a color");
// var color2 = prompt("pick another color");
// var color3 = prompt("pick the last color");
// console.log(color1);
// console.log(color2);
// console.log(color3);
// // fun1(); 
// document.getElementById('p1').style.color = color1;
// document.getElementById("p2").style.color= color2;
// document.getElementById('p3').style.color= color3;
// usercolors(color1 , color2, color3);
}

function usercolors (x,y,z){
    for(var i =0 ; i < arguments.length; i++){
        paragraphs[i].style.color = arguments[i];
    }
// console.log(x,y,z);
// p1.style.color =x;

}

color();