/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
*/

//Answer
function findMultiples(integer, limit) {
    let arr = []
    for(let i = 1; i*integer<=limit; i++){
      arr.push(i*integer)
    }
    return arr
  }

//Cleaner Answer
function findMultiples(integer, limit) {
    let result = []
    for(let i = integer; i <= limit; i+=integer){
      result.push(i)
    }
    return result
  }

//Explained
/*created an empty array to hold results, then used integer as starting point of the for loop, incrementing by integer + starting point
until the starting point is less than or equal to the limit, then return the resulting array*/
  