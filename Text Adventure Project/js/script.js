function startGame(){
    var element = document.createElement("button") ;
    element.setAttribute('type' , ' button');
    var intro = prompt("Enter Your Name");
    console.log(intro);
    document.getElementById('start').innerHTML =  "hello," +  intro + " " + "This is a simple interactive game," ;


}

var message = [];
   var stage = 1;
   var number = 1;

   
function CharacterInfo(username, ){
    this.username = username;
    this.email = email;
    this.password = password;
}