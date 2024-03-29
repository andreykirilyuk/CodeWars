/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/

//Answer
function strCount(str, letter){  
    let split = str.split('')
    let filtered = split.filter((x) => x === letter)
    return filtered.length
  }

//Explained
/*
split the string so you can perform array functions on it, then filter it where x  is matching the given letter,
and return the length to see how many times the letter appears in the given string.
*/

//Alternate Answer
function strCount(str, letter){  
    return str.split(letter).length-1
  }

//Explained
/*
you can just split the string by the letter, then return the length minus one for a simple one liner.
*/
