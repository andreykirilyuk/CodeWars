// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Answer
function getCount(str) {
    let arr = str.split('')
    let vowels = arr.filter(item => item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u')
    return vowels.length
  }

//filter out the vowels and then return the length of the array you get back