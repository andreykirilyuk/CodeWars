/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

//Answer
function simpleMultiplication(number) {
    if(number%2 === 0){
      return number*8
    }else return number*9
 }
//check if num modulus 2 is zero then multiply by 8, else multiply by 9