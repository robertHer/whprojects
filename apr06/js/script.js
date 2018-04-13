// Math object

// integers-whole numbers
// floats-Decimals

var wha = -3.15 * 3.14;
//0.03 

var rounded = Math.round(wha);
var roundedup = Math.ceil(0.00000001);
var roundedDown = Math.floor(0.99999999);
var pi = Math.PI;

// console.log(Math.pow(8,2));
// console.log('.round()' + rounded, 'ceil()' + roundedup , roundedDown , pi);

// console.log(Math.sqrt(64));

// console.log(Math.random())

// vvv random number generator vvvvv
// var rand = Math.random();
// rand = Math.floor(rand * 10);
// console.log(rand);

// function pickANum(){
// var userNum = prompt('guess a Number between 1 - 10');
// checkNum(userNum);
// }
// pickANum();

// function pickAnotherNum(){
//     var userNum = prompt('Guess Again');
//     checkNum(userNum); 
// }

// function checkNum(num){
//     if(num < rand ){
//         alert(num + ' Is too low. Pick Again!');
//         pickAnotherNum();
//     }else if(num > rand){
//         alert(num + 'Is too high. Pick Again!');
//         pickAnotherNum();
//     }else {
//         alert(num + ' Is the right number! You won!');
//     }
// }


var userPick = document.getElementById('userPick');
var submitBtn = document.getElementById('submit');
var resetNum = document.getElementById('reset');
resetNum.addEventListener('click', getRandNum);
var userPickRS = document.querySelector('h1');
submitBtn.addEventListener('click', getUserPick);

// var rand = Math.random();
//  rand = Math.floor(rand * 10);
var rand;
// var attempts = 3;
function getRandNum(){
    // attempts = 3;
    // userPick.value = " ";
    var rand = Math.random();
    rand = Math.floor(rand * 11);
    console.log(rand);
}
getRandNum();

function getUserPick(){
    // attempts = attempts - 1;
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = " ";
}
function checkUserPick(x){
  
    // console.log(rand);
    // if(attempts > 0){
    if(x < rand ){
            printUserRS(x + ' Is too low. Pick Again!');
            
        }else if(x > rand){
            printUserRS(x + ' Is too high. Pick Again!');
        }else {
            printUserRS (x  + ' Is the right number! You won!'); 
            
        }
    // }else{
    //     printUserRS("game over!");
    // }

}

function printUserRS(userRes){
    userPickRS.innerHTML = userRes; 
}

function getRandomColor(){
    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = ' hsl('+ randColor +', 50% , 50%)';
console.log(randColor);
}
getRandomColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){
var width = Math.round(  ( e.x / window.innerWidth) *100);
var height = Math.round((e.y / window.innerHeight)*100);
    // console.log("x-axis: " + e.x, 'y-axis: ' + e.y);
    document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`;
});


