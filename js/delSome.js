'use strict';

function removeDupes(str){
 return Array.from(new Set(str)).join('')
///////////////////////////////////////////////
    // let arr = []
    // for(let i = 0; i < str.length; i++){
    //     arr.push(str[i])       
    // }
    // let array = arr.filter((e, i, arrF) => arrF.indexOf(e) === i)
    // return array.join('')
}
console.log(removeDupes('abcd'));
console.log(removeDupes('aabbccdd'));
console.log(removeDupes('asdfghjhgfds'));
console.log(removeDupes('zzzzzzzzzzaaaaaaffff'));
