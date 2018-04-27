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
  


   
   var select = document.querySelector('select');
   var html = document.querySelector('html');
   
   function update(bgColor, textColor) {
     html.style.backgroundColor = bgColor;
     html.style.color = textColor;
   }
   
   

