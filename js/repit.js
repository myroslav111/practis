'use strict';

function highestFrequency(arr){
    const map = {}
    let maxFreq = 0;
    let maxFreqStr = arr[0] 

    for(let i =0; i < arr.length; i++){
        const current = arr[i];
       
       
        // console.log('тек. ел. итер>>',current, 'i>>', i);
        if(map[current]){
            
            map[current]++
            // console.log('значения ключа>>',map[current]);
        }else{
            
            map[current] = 1
            // console.log('значения ключа>>',map[current]);
        }

        if(map[current] > maxFreq){
            maxFreq = map[current];
            maxFreqStr = current
        }
    }
    return maxFreqStr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e']));
console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e', 'c', 'a', 'a', 'a']));
console.log(highestFrequency(['abc', 'bcd', 'abc', 'cff', 'def', 'eee']));
console.log(highestFrequency(['abc', 'bcd']));