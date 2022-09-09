//Problem:
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

//Answer
function abbrevName(name){
    let split = name.toUpperCase().split(' ')
    return `${split[0][0]}.${split[1][0]}`
  }

//Explained:
//split the string at the space, make sure they're upper case for required abbreviation, then join together the first letter of the 0 index with first letter of 1 index in template literal form, or can use concatencation