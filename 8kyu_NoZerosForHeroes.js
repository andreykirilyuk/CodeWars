/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

//Answer
function noBoringZeros(n) {
    if(n === 0) return n
    if(n % 10 === 0) return noBoringZeros (n/10)
    else return n
  }

//Explained
/*instead of working on the input as a string and filtering, go for the math approach and recursively divide by 10 
if the number is divisible by 10 with no remainder (modulus 10 === 0) until you get rid of all the zeroes at the end, 
then return the fully divided number.*/