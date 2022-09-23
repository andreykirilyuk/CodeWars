/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//Solution
function solution(string) {
    const regex = /([a-z])([A-Z])/g;
    return string.replace(regex, '$1 $2'); 
  }
  