'use strict';

// function search(arr, target){
//     return arr.indexOf(target)
// }

// time: O(n) бинарный поиск
function search(arr, target){
   let start = 0;
   let end = arr.length -1;
//    первая оптимизация число даже не попадает в диапазон не нужно итерировать
   if(target < arr[start] || target > arr[end]){
    return -1
   }

   while(true){
      if(target === arr[start]){
        return start
      }
      if(target === arr[end]){
        return end
    }

    if(end - start <= 1){
        return -1
    }
    const middle =Math.floor((start + end) / 2)

    if (target > arr[middle]) {
        start = middle + 1
    }else if (target < arr[middle]) {
        end = middle - 1
    }else{
        middle
    }
   }

}


console.log(search([1, 3, 6, 13, 17], 13));
console.log(search([1, 3, 6, 13, 17], 12));