// function convertToRoman(num) {
    // const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     const arrStrOfNum = num.toString().split('')
//         while (arrStrOfNum.length < 4) {
//             arrStrOfNum.unshift('0')
//          }
//        const str = arrStrOfNum.join('')
//        let arr = []
//        for (let index = 0; index < str.length; index++) {
//         const element = str[index];
//         if(index === 0){
//             for (let index = 0; index < +element; index++) {
//                 arr.push(rom[0])
//             }
//         }
//         if (index === 1) {
//             if(+element <= 3){
//                 for (let index = 0; index < +element; index++) {
//                     arr.push(rom[4])
//                 }
//             }else if(+element === 4){
//                 arr.push(rom[3])
//                 }else if(+element === 5){
//                     arr.push(rom[2])
//                     }
//                     else if(+element === 6){
//                         arr.push(rom[2] + rom[4])
//                         }  else if(+element === 7){
//                             arr.push(rom[2] + rom[4] + rom[4])
//                             }else if(+element === 8){
//                                 arr.push(rom[2] + rom[4] + rom[4] + rom[4])
//                                 }else if(+element === 9){
//                                     arr.push(rom[1])
//                                     }
            
//         }
//         if(index === 2)
//         {
//             if(+element <= 3){
//                 for (let index = 0; index < +element; index++) {
//                     arr.push(rom[8])
//                 }
//             }else if(+element === 4){
//                 arr.push(rom[7])
//                 }else if(+element === 5){
//                     arr.push(rom[6])
//                     }
//                     else if(+element === 6){
//                         arr.push(rom[6] + rom[8])
//                         }  else if(+element === 7){
//                             arr.push(rom[6] + rom[8] + rom[8])
//                             }else if(+element === 8){
//                                 arr.push(rom[6] + rom[8] + rom[8] + rom[8])
//                                 }else if(+element === 9){
//                                     arr.push(rom[5])
//                                     }
//         }
//         if(index === 3)
//         {
//             if(+element <= 3){
//                 for (let index = 0; index < +element; index++) {
//                     arr.push(rom[12])
//                 }
//             }else if(+element === 4){
//                 arr.push(rom[11])
//                 }else if(+element === 5){
//                     arr.push(rom[10])
//                     }
//                     else if(+element === 6){
//                         arr.push(rom[10] + rom[12])
//                         }  else if(+element === 7){
//                             arr.push(rom[10] + rom[12] + rom[12])
//                             }else if(+element === 8){
//                                 arr.push(rom[10] + rom[12] + rom[12] + rom[12])
//                                 }else if(+element === 9){
//                                     arr.push(rom[9])
//                                     }
//         }
//        }
//     return arr.join('')
// }

// console.log(convertToRoman(3312));
function fromRoman(str){
    const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let num = 0
    const arr = str.split('')
    console.log(arr);
    let letter = ''
    let length = 0
    if(arr[0] === 'M'){
           while(length < arr.length){
for (const iterator of arr) {
    if(iterator === 'M'){
    letter = iterator
    num += 1000
    length += 1
    }
    if(iterator === 'C'){
        letter = iterator
        num -= 100
        length += 1
        }
        if(iterator === 'D'){
            letter = iterator
            num += 500
            length += 1
            }
}
    }
    }
 
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(index === 0){
             if(element === "M"){
            // num += 1000
        }}
       
        // if()
        
    }
    return num
}
console.log(fromRoman('MCM'));
// Create a RomanNumerals class
class RomanNumerals{
     static rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

     static toRoman(num) {
        const arrStrOfNum = num.toString().split('')
            while (arrStrOfNum.length < 4) {
                arrStrOfNum.unshift('0')
             }
           const str = arrStrOfNum.join('')
           let arr = []
           for (let index = 0; index < str.length; index++) {
            const element = str[index];
            if(index === 0){
                for (let index = 0; index < +element; index++) {
                    arr.push(this.rom[0])
                }
            }
            if (index === 1) {
                if(+element <= 3){
                    for (let index = 0; index < +element; index++) {
                        arr.push(this.rom[4])
                    }
                }else if(+element === 4){
                    arr.push(this.rom[3])
                    }else if(+element === 5){
                        arr.push(this.rom[2])
                        }
                        else if(+element === 6){
                            arr.push(this.rom[2] + this.rom[4])
                            }  else if(+element === 7){
                                arr.push(this.rom[2] + this.rom[4] + this.rom[4])
                                }else if(+element === 8){
                                    arr.push(this.rom[2] + this.rom[4] + this.rom[4] + this.rom[4])
                                    }else if(+element === 9){
                                        arr.push(this.rom[1])
                                        }
                
            }
            if(index === 2)
            {
                if(+element <= 3){
                    for (let index = 0; index < +element; index++) {
                        arr.push(this.rom[8])
                    }
                }else if(+element === 4){
                    arr.push(this.rom[7])
                    }else if(+element === 5){
                        arr.push(this.rom[6])
                        }
                        else if(+element === 6){
                            arr.push(this.rom[6] + this.rom[8])
                            }  else if(+element === 7){
                                arr.push(this.rom[6] + this.rom[8] + this.rom[8])
                                }else if(+element === 8){
                                    arr.push(this.rom[6] + this.rom[8] + this.rom[8] + this.rom[8])
                                    }else if(+element === 9){
                                        arr.push(this.rom[5])
                                        }
            }
            if(index === 3)
            {
                if(+element <= 3){
                    for (let index = 0; index < +element; index++) {
                        arr.push(this.rom[12])
                    }
                }else if(+element === 4){
                    arr.push(this.rom[11])
                    }else if(+element === 5){
                        arr.push(this.rom[10])
                        }
                        else if(+element === 6){
                            arr.push(this.rom[10] + this.rom[12])
                            }  else if(+element === 7){
                                arr.push(this.rom[10] + this.rom[12] + this.rom[12])
                                }else if(+element === 8){
                                    arr.push(this.rom[10] + this.rom[12] + this.rom[12] + this.rom[12])
                                    }else if(+element === 9){
                                        arr.push(this.rom[9])
                                        }
            }
           }
        return arr.join('')
    }
}

console.log(RomanNumerals.toRoman(1666));

