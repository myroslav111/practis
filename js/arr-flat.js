'use strict';

function flatten(arr){
    // let arrFirst = arr.flatMap(el => el)
    // .flatMap(el => el)
    // .flatMap(el => el)
    ////////////////////////////////////////////
    let newArr = arr.flatMap((el, i, a) => {
        if(Array.isArray(el)){
           return flatten(el)
        }
        return el
    })
    return newArr
}
console.log(flatten([[1], [[2, 3]], [[[4]]]]));
console.log(flatten([[1], [[2, 3]], [[[[4]]]]]));
console.log(flatten([[[1]], [[2, 3]], [[[[4]]]]]));
