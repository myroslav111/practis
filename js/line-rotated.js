'use strict';

function isStringRotated(source, test){
    if(source.length !== test.length){
        return false
    }
    // const sourceArr = source.split('');
    // const testArr = test.split(''); 

    // return sourceArr.every(el => testArr.includes(el))
/////////////////////////////////////////////////////////////////////////
    // for(let i = 0; i < source.length; i++){
    //     console.log('1>>', source.slice(i, source.length), '2>>', source.slice(0, i));
    //     const rotate = source.slice(i, source.length) + source.slice(0, i);
    //     if(rotate === test){
    //         console.log('result>>', rotate, 'test>>', test);
    //         return true
    //     }
    // }
    // return false
    
    return (source + source).includes(test)
}

console.log(isStringRotated('qwerty', 'ytrewq'));
console.log(isStringRotated('asdfgh', 'hasdfg'));
console.log(isStringRotated('qwerty', 'ertyqw'));
console.log(isStringRotated('zxcvb', 'cvbzx'));