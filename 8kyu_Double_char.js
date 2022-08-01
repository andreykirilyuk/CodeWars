/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

//Answer
function doubleChar(str) {
    let result = []
    for(let i = 0; i < str.length; i++){
      result.push(str[i]+str[i])
    }
    return result.join('')
  }
//push 2 instances of the character to an array then join it

//alternate one line answer using map method to double the chars
function doubleChar(str){
    return str.split('').map(x => x + x).join('')
}