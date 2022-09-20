/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

//Answer
var capitals = function (word) {
    let result = []
      let arr = word.split('')
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === arr[i].toUpperCase()) {
        result.push(i)
      } 
    }
    return result
  };