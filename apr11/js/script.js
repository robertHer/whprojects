// var btns = document.querySelectorAll('button');

// for(var i = 0; i< btns.length; i++){
//     btns[i].addEventListener('click', function(evt){
//         console.log(evt.target);
//         console.log(this);
//     })
// }

// window.addEventListener('click', function(evt){
//     console.log(evt.target.nodeName);
//     if(evt.target.nodeName == 'BUTTON'){
//         console.log(evt.target);
//         console.log(this);
//     }
// });

// var cars = ['jeep', 'honda', 'jeep', 'chevy'];
// console.log(cars);

// //objects
// var car = {
//     type: 'jeep',
//     model: 'wrangler',
//     color: 'black',
//     offroad: true ,
//     trim: ['sunroof', 'hardtop', '4 wheeldrive'] 
// };
// console.log(car.trim);

// var me = {
//     firstname: 'Roberto',
//     lastname: 'Hernadnez',
//     age: 21 , 
//     height: "5'7",
//     hair: [true , 'short'] , 
//     haircolor: 'black',
//     facialhair: true ,
//     facialhaircolor: 'black',
//     greeting: function(msg){
//         console.log(this.firstname);
//         console.log(msg + " " + this.firstname);
//     }

// };
// console.log(me.hair);

// me.greeting("hey there");

// me.firstname = "chuck";

// me.greeting(" I'm now");

// function Person(first, last, age, eye){
// this.firstname = first;
// this.lastname = last;
// this.age = age;
// this.eye = eye;
// this.greeting = function(msg){
//     console.log (msg + " " + this.firstname);
// };
// }

// var myDad = new Person('David' , 'Higley', 59 , 'brown');

// console.log(myDad); 

// var myMom = new Person('Cecilia' , 'Hernandez' , 44 , 'brown');
// console.log(myMom);

// myMom.greeting("Hello");


var form = document.querySelector('form');
console.log(form.elements.value);


var users = [];
var user = 0;
console.log(user);
function UserAcc(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

var submitBtn = document.querySelector('input[type = "submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
   
    users.push('user' +user);
    user++;
    for(var i = 0; i< form.elements.length -1; i++){
         user[i] = new UserAcc();
    console.log(form.elements[i].value);
}
});
// console.log(users);




// var user1 = new User('Testuser' , 'email@email.com' , '4389hiretv5');
// console.log(user1);
