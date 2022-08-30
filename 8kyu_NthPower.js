/*
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/

//Answer
function index(array, n){
    if(!array[n]){
      return -1
    }else return Math.pow(array[n],n)
  }
//if array[n] doesn't exist, return -1, else return the power of n of it

//Oneliner Alternate Answer
function index(array,n){
    return array[n]**n || -1
}
//**n is the shorthand for math.pow to n, then use or operator to else return -1