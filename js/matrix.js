'use strict';

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// [1, 2, 3]    [7, 4, 1] // 0:0 0:1 0:2    0:2 1:2 2:2
// [4, 5, 6] => [8, 5, 2] // 1:0 1:1 1:2 => 0:1 1:1 2:1
// [7, 8, 9]    [9, 6, 3] // 2:0 2:1 2:2    0:0 1:0 2:0

// console.log(matrix);
function rotate(source){
    const rotated = source[0].map(_ => [])
    // console.log(rotated);
    for(let i = 0; i < source.length; i++){
        for(let j = 0; j < source[i].length; j++){
            // console.log('src>', source[i][j]);
            // console.log('value>', value);
            console.log(
                '(source.length -1 - i)=>', source.length -1 - i,
                'i=>', i ,'j=>', j);
            rotated[j][source.length -1 - i] = source[i][j]
            // console.log(rotated[j][source.length -1 - i]);
            // console.log(value);
        }
    }
    return rotated 
}

function rotate180(source){
    return rotate(rotate(source))
}

function rotate270(source){
    return rotate(rotate180(source))
}

function print(arr){
    arr.forEach(i => console.log(i));
}

print(rotate(matrix));