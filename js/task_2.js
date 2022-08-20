function rowSumOddNumbers(n) {
    if(n === 1){
        return n
    }
	const num =  n * (n + 1)
    let acc = []
    let arr = [];
    const arrFinish = []
  for (let i = 0; i <= num; i++) {
    if(i % 2 !== 0 ){ 
    arr.push(i)
    acc.push(arr)
    }
  }
  for (let index = 1; index < acc.length; index++) {
        if(acc[index].length !== 0){ arrFinish.push(acc[index].splice(0, index))}
  }
  const sum = arrFinish[n - 1].reduce((acc, num) => { return acc + num}, 0)
  return sum
}

console.log(rowSumOddNumbers(2));