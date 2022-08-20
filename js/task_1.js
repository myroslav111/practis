function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const sortDown = numbers.sort((a, b) => a - b)
    return sortDown[0] + sortDown[1]
  }

  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));