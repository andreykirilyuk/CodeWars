/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

//Answer
function isIsogram(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
      for(let j = i+1; j < str.length; j++){
        if (str[i] === str[j]){
          return false
        }
      }
    }
    return true
  }
//check if the character one index above the original string index is equal, if it is return false, else return true

//alternate answer
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
//values in the set may only appear once, we check the size of the set to the str.length to see if both only contain unique characters.