/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//Answer
function reverseWords(str) {
    let split = str.split(' ')
    for(let i = 0; i < split.length; i++){
      split[i] = split[i].split('').reverse().join('')
    }
    return split.join(' ')
  }

//do a split and reverse looping through the array, just being careful with the split parameters