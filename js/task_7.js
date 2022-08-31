snail = function(array) {
    // enjoy
console.log(array);
// console.log(array[0][2]);
const arr = []
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    if(index === 0){
        arr.push(element)
    }
    if(index === 1){
        for (let i = index; i < array.length; i++) {
            const el = array[i];
            arr.push(array[i][array[i].length - 1])
            
        }
        }
        if(index === 2){
            arr.push(array[array.length -1].slice(0, array.length -1).reverse())
        }
        if(index === 3){
            for (let ind = array.length - 2; ind > 0; ind--) {
                const element = array[ind];
                if(ind !== 0){
                    arr.push(array[ind][0])
                }
                
            }
        }
    }
    

    return arr
  }

  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
//   , [1, 2, 3, 6, 9, 8, 7, 4, 5]);