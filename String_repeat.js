// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//Answer
function repeatStr (n, s) {
    let str = ''
    for(let i = 1; i <= n; i++){
      str += s
    }
    return str
  }

//set up an empty string placeholder, use for loop to concatenate.

//easier answer would be to use repeat method:
// function repeatStr (n, s) {
//     return s.repeat(n);
// }