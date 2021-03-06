/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

 The binary number returned should be a string.

 Examples:(Input1, Input2 --> Output (explanation)))

 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//Answer
function addBinary(a,b) {
    let number = a+b
    return number.toString(2)
   }

/* toString([radix]) returns a string value in a specified radix, letting us
convert our number sum to a binary string when we use radix 2.
*/

//Alternatively can make it a one-liner with:
function addBinary(a,b){
    return (a+b).toString(2)
}