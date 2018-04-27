var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());

console.log(theDate.toLocaleString('en-us', {month: 'long'}));


var myBday = new Date(1996, 9, 05);

var dateStr = `
    Today's date is the  ${theDate.getDate()}th of ${theDate.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
`;


var MyBdayStr = `
My birthdate is  ${myBday.toLocaleString('en-us', {month: '2-digit', day: '2-digit', year:'2-digit'})}

`;
// document.body.textContent = MyBdayStr;

// var theTime = new Date();






var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function(){
    clearInterval(myTimer);
    clearTimeout(myDelay);
});


function hiliteBg(){
    document.body.classList.add('hilite');
}
var myTimer = setInterval(hiliteBg, 6000);
myDelay = setTimeout(updateTimer, 100);
function updateTimer(){
var theTime = new Date();
var timeStr = `
${theTime.toLocaleString('en-us', {hour: '2-digit', hour12: false ,  minute: '2-digit' , second: '2-digit'})}
`;
document.querySelector('h3').textContent = timeStr;
}

