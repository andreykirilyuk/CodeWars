/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

//Answer
function feast(beast, dish) {
    let firstLetterBeast = beast[0]
    let lastLetterBeast = beast[beast.length-1]
    let firstLetterDish = dish[0]
    let lastLetterDish = dish[dish.length-1]
    return firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish
   }
//setting up some variables for readability, then simple comparison check

//alternate answer
function feast(beast, dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
   }
//can make it a one-liner without variables, using slice(-1) to get the last letter from each string