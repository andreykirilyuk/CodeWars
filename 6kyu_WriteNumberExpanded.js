/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

//Answer
function expandedForm(num) {
    return num.toString().split('').reverse()
              .map((a,i) => a * Math.pow(10,i))
              .filter((a) => a > 0)
              .reverse()
              .join(' + ')
  }

//Explained
/*it's easier to manipulate the numbers in string form, where we can split & reverse them and use the positioning to 
math.pow them by powers of 10 based on their index, then we filter the value to be above 0 to remove the 0's from
higher value numbers, and reverse to join them back together for the required syntax. */