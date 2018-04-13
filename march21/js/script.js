function welcome() {
    var username = prompt("what is your name") ;
    document.getElementById('welcome').innerHTML = username;

}

function toggleColor() {
    // document.body.classList.add('colorize');
    // document.body.classList.toggle('colorize');
    newImage();
}

function newImage(){
  document.body.classList.toggle('colorize') ;
}