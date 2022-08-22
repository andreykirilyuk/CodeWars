/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

//Answer
function stray(numbers) {
    let filtered = numbers.filter((x,i,a) => a.indexOf(x) == a.lastIndexOf(x))
    return +filtered
  }
//filter the numbers by checking for unique values, where their index is also their last index, then return the value

//Alternate answer
function stray(numbers) {
    return numbers.reduce((a,b) => a ^ b)
  }
//checks for exclusive number using ^ (xor)