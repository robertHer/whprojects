// document.getElementById('btn2').style.color = "red"  ;

backgroundColor.getElementById('bkcolor').style = "blue";

console.log("Here is my first conosle message") ;
console.info("This is info") ;
console.warn("Danger will robenson") ;
console.error("Here is an error") ;

//browser alert box

// alert('Here is my Popup.') ;
//confirm box
// var userResult =  confirm("Did you remember to lock your car") ;
// console.log(userResult) ; 

// var userName = prompt("what is your name?") ;
// console.log(userName);

var username; 
var room1;
var user_name;
var userName; 

var age = 27;
var decade = 10;
var double = 2;
var divide = 4
var newAge =( (age + decade) * double) / divide;
// var ageResult = (newage / divide);
console.log(newAge);

//concatination
// var firstName = prompt("What is your first Name?");
// var lastName = prompt("What is your last name?");
// alert(`${firstName} ${lastName}`);



//promt the user for make of vehicle
// the year
//the color
// alert the result 
// 3 var
//format : color, year  make. 


function getUserVehicle(){
    var color = prompt("what is the color of your vehicle?");
    var year = prompt("what is the year of your vehicle?"); 
    var make = prompt("what is the make of your vehicle?");
    var result = color + ", " + year +  " " + make + ". " ;
    alert(result);
}

function primaryUser(){
    var first = prompt("What is your first Name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place  ;
}

function secondUser(){
    var first = prompt("your first name");
    var last = prompt("Your last name");
    var city = prompt("your current city");

    document.getElementById('secondUser').innerHTML = first + " " + last + ", current city: " + city ;
}

function thirdUser(){
    var date = prompt("The date");
    var month = prompt("The Month");
    var year = prompt("The year");

    document.getElementById('thirdUser').innerHTML = "The Date " + date + " " + month + " " + year ;
}

function fourthUser(){
    var color = prompt("your favorite color");
    var number = prompt("your lucky number");
    var day = prompt("your favorite day of the week");

    document.getElementById('fourthUser').innerHTML = color + " " + number + " " + day ; 
}





