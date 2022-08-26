// function permutations(string) {
//     if(string.length < 2){
//         return string
//     }

//     let arr = []
//     for (let index = 0; index < string.length; index++) {
//         const element = string[index];
//         // console.log(`${index}: `,element);
//         if (string.indexOf(element) !== index) continue
        
//         const el1 = string.slice(0, index)
//         const el2 = string.slice(index + 1, string.length)
//         const conc = el1 + el2
//             // console.log(`${index}: `,el1);
//             // console.log(`${index}: `,el2);
//             console.log(`${index}: `,conc);
//             for(let permutation of permutations(conc)){
//                 // console.log(`${index}: `,element);
//                 // console.log(`${index}: `,permutation);
//                 // console.log(element + permutation);
//                 console.log(`${index}: `,arr);
//                 arr.push(element + permutation)
                
//             }
//     }
    
// 	return arr;
// }

// // console.log(permutations('ab'));
// console.log(permutations('aabb'));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const c = clients.slice(1, 2)
// console.log(c); // ["Ajax", "Poly"]
// console.log(clients);

function permutations(string) {
    
    if(string.length === 1){
    //   arr.push(string)
        return [...string]
    } 
   
    const arr = []
    
    for(let i = 0; i < string.length; i++){
      const letter = string[i]
      if(string.indexOf(letter) !== i) continue
      const subStrFirst = string.slice(0, i)
      const subStrSecond = string.slice(i + 1, string.length)
      const concatStr = subStrFirst + subStrSecond 
      console.log(concatStr);
      for(let permutation of permutations(concatStr)){
        arr.push(letter + permutation)
      }
      
    }
      return arr;
  
  }
//   console.log(permutations('aabb'));
  console.log(permutations('ab'));

//   for(let permutation of 'aabb'){
//     console.log(permutation);
//     // arr.push(letter + permutation)
//   }