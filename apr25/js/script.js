var searchBox = document.querySelector('header input');
searchBox.addEventListener('keypress', getUserSearch);
var userSearch = '';
function getUserSearch(evt){
    if(evt.key !== 'undefined' &&
    evt.key !== 'Backspace' &&
    evt.key !== 'Tab')

userSearch += evt.key;

getCharacter(userSearch);
console.log(userSearch);
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
            console.log(JSON.parse(req.responseText));
        }else{
            console.log('error: ', req.statusText);
        }
    }
    req.send(null);
}

var cardlist = document.querySelector('main ul');
function cardListData(cards){
    // console.log(cards);

for(i = 0; i< cards.results.length; i++){
    cardlist.innerHTML +=cards.results[i].name;
    var card = `
    <li>
    <img src="${cards.results[i].image}">
    <h3>${cards.results[i].name}</h3>
    </li>
    `
    cardlist.innerHTML += card;
}
}

getReq( "https://rickandmortyapi.com/api/character" , cardListData); 


function getCharacter(searchStr){
    var characterArr = [];
console.log(searchStr);
    var req = new XMLHttpRequest();
    req.open('GET',  "https://rickandmortyapi.com/api/character" );
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            var obj = json.parse(req.responseText).results;
            for(var i = 0; i< obj.length; i++){
                characterArr.push(JSON.parse(req.responseText).results[i]);
                console.log(obj[i].name)
               
        }
    }
    req.send(null);
    console.log(characterArr);
    
  
}




