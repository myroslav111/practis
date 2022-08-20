// function findOdd(A) {
//     //happy coding!
//     if(A.length === 1){
//       return A[0]
//     }
//     let obj = {}
//     let acc = 1
//     for(let i = 0; i < A.length; i += 1 ){
//     const current = A[i]
//     if(!(current in obj)){
//         obj[current] = acc
//     }else{
//         obj[current] += 1
//     }
//       console.log(`${i}`, obj)
//     }
//     const odd = Object.values(obj).find(num => +num % 2 !== 0)
//     const arrValues = Object.values(obj).indexOf(odd)
//     const oddNum = Object.keys(obj)[arrValues]
//     console.log(oddNum);
//     console.log(arrValues);
//     console.log(odd);
//     return +oddNum
  
//   }

const findOdd = (qw) => qw.reduce((a, b) => {
    console.log("a: ",a);
    console.log("b: ",b);
    return a ^ b
});
//   console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))
  console.log(findOdd([1, 1, 1, 3, 3,3]))

//   const q = 21 ^ 3
//   console.log(q);