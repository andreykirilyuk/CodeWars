//Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//Answer
function past(h, m, s){
    let millisecond = 1000
    let result = (h*3600*millisecond)+(m*60*millisecond)+(s*millisecond)
    return result
  }

//can shorten multiplication but this is readable using millisecond as variable