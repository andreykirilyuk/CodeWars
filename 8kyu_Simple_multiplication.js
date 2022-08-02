/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

//Answer
function simpleMultiplication(number) {
    if(number%2 === 0){
      return number*8
    }else return number*9
 }
//check if num modulus 2 is zero then multiply by 8, else multiply by 9

//alternate one liner answer:
function simpleMultiplication(number) {
    return number * (number%2 ? 9 : 8)
}
//ternary operator to check if mod2 !== 0, multiply by 9 else by 8