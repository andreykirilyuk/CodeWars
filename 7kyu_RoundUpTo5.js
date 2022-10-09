/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

//Solved
function roundToNext5(n){
    return Math.ceil(n/5)*5
  }

//Explained
//we use the math ceil to get the rounded number base then multiply by 5 to round up

//you can also do it like this:
function roundToNext5(n){
    while(n%5) n++;
    return n;
  }