function userStr(evt){
//     if(evt.key !== 'undefined' &&
//     evt.key !== 'Backspace' &&
//     evt.key !== 'Tab')

// str += evt.key;

console.log( searchBox.value);
getReq(`http://api.github.com/search/users?q=${searchBox.value}&client_id=YYxmVolS-r7-Zi17nivn35xAdqqPqBOW${clientId}`, githubUsers);
}