// function userName (){
// var fullName = prompt("What is your full Name?").split(" ");
// var splitUsername = fullName.split(' ');
// console.log(fullName);
// outputUsername(fullName);
// }


// function outputUsername(nameArray){
// console.log(nameArray);
// for (var i = 0 ; i < nameArray.length; i++){
//     if (i == 0 || i == nameArray.length - 1 ){
//         console.log("We got the zeroth element!" , nameArray[i]);
//         document.getElementById('firstname').innerHTML += nameArray[i];
    
    // } else{
    //     console.log("not the zeroth");
    // }
// }



// }

// userName();



var cars = ["honda" , "toyota", "acura"];
console.log(cars[1]);
console.log(cars.length);

cars.push("bmw");
console.log(cars);

cars.pop();
console.log(cars);

var removeCar = cars.pop();
console.log(cars);
console.log(removeCar);

cars.unshift("chevy");
console.log(cars);

cars.shift();
console.log(cars);

cars.splice(1,1, "red", "green");
console.log(cars); 

cars.splice(1,1, "apple" , "orange" , "grape", "pair" );
console.log(cars);

cars.splice(2,1);
console.log(cars);

cars.slice(4);
var removed = cars.slice(4,5);
console.log(cars);
console.log(removed);





var movies = ["truman show" ,"across the universe" , "star wars" , "star trek" , "fast and furious"];

console.log(movies);
movies.unshift("die hard");
console.log(movies);

movies.splice(2,2, "godfather 1" , "godfather 2" , "godfather 3");
console.log(movies);
movies.push("guardians of the galaxy");
console.log(movies);



movies.slice(0,2);
// var removeMovie = movies.slice(0,2);
console.log(movies);
// console.log(removeMovie);

movies.shift();
console.log(movies);

// function getUserAge(){
//     var userage = parseInt (prompt('how old are you?'));
//     if(userage < 21){
//         console.log('not old enough');
//         console.log(userage);
//     }else if (userage ==21){
//         console.log('good to go');
//     }else{
//         console.log('plenty old');
//     }
// }

// getUserAge();



// function getAge(){
//     var age = prompt ('whats my age again?');
    
// (age >= 21) ? console.log('true') : console.log('false');
// }
// getAge();


function startGame(){
    var element = document.createElement("button") ;
    element.setAttribute('type' , ' button');
    var intro = prompt("Enter Your Name");
    console.log(intro);
    document.getElementById('start').innerHTML =  "hello, " +  intro + "answer the following questions when you press this button!" + element ;


}
