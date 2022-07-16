// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


//Answer
function squareDigits(num){
  let arr = String(num).split('').map((value) => {
    return Math.pow(+value,2)
  })
  return Number(arr.join(''))
}

//Solved by changing nums to string, then mapping and converting back to number.