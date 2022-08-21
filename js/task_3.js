function findOutlier(integers){
    //your code here
    // let num
    // const sum = integers.reduce((acc, number) => {return acc + number}, 0)
    // console.log(sum );
    // if(sum % 2 !== 0){
    //     num = integers.find(el => el % 2 !== 0)
    //     return num
    // }else{
    //    return num = integers.find(el => el % 2 === 0)
    // }
    // let acc = 0
    // const num = integers.length > 3 ? 2 : 1
    // for (let index = 0; index < integers.length; index++) {
    //     const element = integers[index];
    //     console.log(index, element);
    //     element % 2 !== 0 ? acc += 1 : acc -= 1
        
    //     switch (true) {
    //         case acc >= num:
    //         return  integers.find(el => el % 2 === 0)
    //             case acc <= -num:
    //                 return  integers.find(el => el % 2 !== 0)        
    //         default:
    //             break;
    //     }
    // }

    const arrOdd = []
    const arrEv = []
    for(let num of integers){
      if(num % 2 !== 0){
        arrOdd.push(num)
      }else{
        arrEv.push(num)
      }
    }
    console.log(arrOdd);
    console.log(arrEv);
    return arrOdd.length === 1 ? arrOdd[0] : arrEv[0]
  }

//   console.log(findOutlier([-37064319,-36368496,186352537,-26356129]));
//   console.log(findOutlier([0, 1, 2]));
  console.log(findOutlier([2,6,8,10,3,0,12,14]));