// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//Answer
function duplicateEncode(word){
    let arr = Array.from(word.toLowerCase())
    let temp = []
    for (let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        temp.push('(')
      }else{
        temp.push(')')
      }
    }
    return temp.join('')
}

//have to push the replacements to a new array, otherwise the conditional would not test true once
//values start to replace. use the indexOf === lastIndexOf to check for duplicates.