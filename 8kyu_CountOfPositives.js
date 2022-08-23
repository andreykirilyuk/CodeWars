/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//Answer
function countPositivesSumNegatives(input) {
    if(input){
      let sorted = input.sort((a,b) => a-b)
      let negatives = sorted.filter((x) => x < 0)
      let sumOfNegatives = negatives.reduce((a,b) => a+b,0)
      let positives = sorted.filter((x) => x > 0)
      let countOfPositives = positives.length
      if(countOfPositives == [0] && sumOfNegatives == 0){
        return []
      }else return [countOfPositives,sumOfNegatives]
    }else return []
  }