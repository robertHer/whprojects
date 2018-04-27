var clientId = '860b5a69d5ee5c4fb6d4'; 
var str = '';
var searchBox = document.querySelector('header input');
searchBox.addEventListener('keyup', userStr);

function githubUsers(data){
    console.log(data);
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET' , url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
            console.log(JSON.parse(req.responseText));
        }else{
            console.log('error: ', req.responseText);
        }
    }
    req.send(null);
}



function userStr(evt){

    console.log( searchBox.value);
    getReq(`http://api.github.com/search/users?q=${searchBox.value}&client_id=YYxmVolS-r7-Zi17nivn35xAdqqPqBOW${clientId}`, githubUsers);
    //     if(evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab')
    
    // str += evt.key;
    
    
    }

 