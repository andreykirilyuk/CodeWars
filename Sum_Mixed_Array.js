// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.reduce((a,b) => Number(a) + Number(b), 0)
  }

//this can also be written as:
function sumMix(x){
    return x.reduce((a,b) => +a + +b, 0)
  }
//but that is less readable.