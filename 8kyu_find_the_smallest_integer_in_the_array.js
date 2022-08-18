/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//Answer
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sorted = args.sort((a,b) => a-b)
      return sorted[0]
    }
  }

//sort the array, then return the first value in the array

//alternate answer
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//spread the args, and return the minimum value using Math prototype method