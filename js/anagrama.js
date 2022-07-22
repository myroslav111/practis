'use strict';

function allAnagrams(arr){
    const mainStr = arr[0].split('')
    for(let i = 1; i < arr.length; i++){
    let bool = mainStr.every(el => arr[i].includes(el))
    if(bool === false || mainStr.join('').length !== arr[i].length  ){
        return false
       }
    }
    return true
}

console.log(allAnagrams(['qwer', 'rewq', 'ewrq']));
console.log(allAnagrams(['qwer', 'rewq', 'ewrq']));
console.log(allAnagrams(['qwer', 'rFtr', 'ewrq']));