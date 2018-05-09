var value = 5;

document.getElementById('test').innerHTML = 'this is a  p text: ' + value; 

var warn = document.querySelector('#warning');
if (value <10){
    warn.innerHTML = "warning !!!"
}

var colors = ['red', 'blue', 'yellow', 'green'];


colors.forEach(eachColor => {
    result = result + ' ' + eachColor;
});

document.getElementById('color').innerHTML = result;
