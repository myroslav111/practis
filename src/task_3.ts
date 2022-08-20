// function checkBrackets (str: string): boolean {
//     const stack: string[] = [];
//     const  obj: any = {
//         '(': ')' ,
//     }
//     for (let i = 0; i < str.length; i += 1 ){
//         const br: string = str[i];
//         if(br === '('){
//             stack.push(br)
//         }else{
//           const lastBr: any = stack.pop(); 
//           if(br !== obj[lastBr]){
//             return false
//             }                       
//         }
//     }
// if(stack.length) return false
// return true
// }

// console.log(checkBrackets('(())'));
/*----------------------------------------------------------------- */

// function withoutRepit(arr: number[]): number[]{
//     const unic: number[] = [];
//     // const trest: number[] = [];

//     for(let i = 0; i < arr.length; i ++){
//         const current: number = arr[i];
//         let count: number = 0
//         for(let j = 0; j < arr.length; j ++){

//             if(current === arr[j]){
//                 count ++
//             }
//         }
//             if(count === 1){
//                 unic.push(current);
//             }     
//     }

//     return unic
// }
//     interface StringArray {
//         [index: number]: number;
//       }
// function withoutRepit(arr: number[]): number[]{
//     const unic: number[] = [];
//     const obj: StringArray = {}

//     for(let i = 0; i < arr.length; i ++){
//         const current: number = arr[i];
//         if(!(current in obj)){ 
//             obj[current] = 1 
//         }
//         else{
//             obj[current] += 1 
//         }       
//     }
//     const keys: string[] = Object.keys(obj);
//     keys.forEach(key => {
        
//         if(obj[Number(key)] === 1){
//             unic.push(Number(key))
//         }
//     })
//     return unic
// }


// console.log(withoutRepit([1,1,2,3,4,5,5,6,6,7,7,8]));
