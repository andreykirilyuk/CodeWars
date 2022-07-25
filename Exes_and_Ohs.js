// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Answer 
function XO(str) {
    let lower = str.toLowerCase()
    let temp = Array.from(lower)
    return temp.filter((x) => x === 'x').length === temp.filter((x) => x === 'o').length
}
//convert to array, then filter out the letters we're checking and compare the length of return


//can also use .split('x') & .split('o') to make it a one-liner, clever solution:
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}