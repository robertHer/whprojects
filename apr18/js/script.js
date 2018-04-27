// var paras = document.querySelectorAll('p');

// // for(var i = 0; i < paras.length; i++){
// //     // console.log(paras[i].classList.contains('paras'));
// // if(){
// //     console.log('thats not true');

// // }

// // }



// // if()

// console.log(3 === 3);
// console.log(typeof(3));
// console.log(typeof('3'));

// var usernum = parseInt(prompt('pick a number'));
// if (typeof(usernum) ='number'){

//     if(!usernum){
//         console.log(3 + usernum);
//     }else{
//         console.log('Enter something else')
//     }
// }
var weatherKey = '6239a64e7b80683f6ccbaac8ff2b9c34';
var myUl = document.querySelector('ul');
console.log(new XMLHttpRequest());

var req = new XMLHttpRequest();

req.open('GET', ' http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6239a64e7b80683f6ccbaac8ff2b9c34 '); 
req.onload = function(){
    if(req.readyState === 4){
        var apidata = JSON.parse(req.responseText);
        // console.log(apidata.emojis_url);
        processData(apidata);
    }
}
req.send(null);

function processData(data){
    for(var i = 0; i< data.list.length; i++){
        var timeOfDay = data.list[i].dt;
        var myLi = `    
        <li>
        <p>${timeOfDay}</p>
        
    </li>
        `;
        myUl.innerHTML += myLi;
    }
}
