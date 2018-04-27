// var storagebtn = document.querySelector('#btn1');
// var storagebtn2 = document.querySelector('#btn2');


// storagebtn.addEventListener('click', setLocalStorage);
// storagebtn2.addEventListener('click', setSessionStorage);

// function setLocalStorage(){
//     localStorage.setItem('lastname', 'Hernandez');
// }

// function setSessionStorage(){

//     sessionStorage.setItem('Vehicle', 'lexus');
// }


var savebtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem('details') !== null){
    savebtn.removeEventListener('click', getUserInfo);

   savebtn.addEventListener('click', checkpassword);
}else{
    savebtn.removeEventListener('click', checkpassword);
    savebtn.addEventListener('click', getUserInfo);
}



function getUserInfo(evt){
evt.preventDefault();
// console.log('get info');
var username = document.querySelector('input[type = "text"]:checked').value;
// console.log(username);

var password = MD5(document.querySelector('input[type = "password"]').value);
// console.log(password);

var radio = document.querySelectorAll('input[type= "text"]').value;
console.log(radio);
// for(i = 0; i< document.querySelector('input[type = "radio"]'.length; i++)){
// var theme = document.querySelector('input[type = "radio"]')[i].value;
// console.log(theme);
localStorage.setItem("details", JSON.stringify(new userInfo(username, password, radio)))

}



// localStorage.setItem( "details", JSON.stringify( new UserInfo(username, password)));
// }

function UserInfo(un, pw){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){
    if(localStorage.getItem('details') !== null){
        document.querySelector('label[for = "theme"]').style.display = 'none';
        var userInfo = JSON.parse( localStorage.getItem('details'));
        document.querySelector('input[type="text"]').value = userInfo.user;   
        // alert('please enter your password');
    }
}
checkUserInfo();


function checkpassword(evt){
    evt.preventDefault();
    var username = document.querySelector('input [type="text"]').value;
    var userpass = MD5(document.querySelector('input [type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem('details'));
    if( username === userInfo.user && userpass === userInfo.pass){
        alert('Wecome Home!');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('please enter the correct password');
    }
}











// Captcha Script

function checkform(theform){
var why = "";

if(theform.CaptchaInput.value == ""){
why += "- Please Enter CAPTCHA Code.\n";
}
if(theform.CaptchaInput.value != ""){
if(ValidCaptcha(theform.CaptchaInput.value) == false){
why += "- The CAPTCHA Code Does Not Match.\n";
}
}
if(why != ""){
alert(why);
return false;
}
}

var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';

var code = a + b + c + d + e;
document.getElementById("txtCaptcha").value = code;
document.getElementById("CaptchaDiv").innerHTML = code;

// Validate input against the generated number
function ValidCaptcha(){
var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
if (str1 == str2){
return true;
}else{
return false;
}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string){
return string.split(' ').join('');
}


