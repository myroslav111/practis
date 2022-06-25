'use strict'
// уникальнось всех елем. с учетом регистра
function isUnique(str){
//    const arrFromStr = str.split('')
//    const uniqueEl = arrFromStr.filter((u, i, arr) => arr.indexOf(u) === i);
//    return  arrFromStr.length === uniqueEl.length

    return new Set(str).size === str.length
}
console.log(isUnique('abcdef'));
console.log(isUnique('1234567'));
console.log(isUnique('abcABC'));
console.log(isUnique('abcadef'));

