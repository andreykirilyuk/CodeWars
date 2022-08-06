/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

//Answer
const quarterOf = (month) => {
    if(month <= 3){
      return 1
    }else if(month <= 6){
      return 2
    }else if(month <= 9){
      return 3
    }else return 4
   }
//simple conditional just be careful to do <= not <

//one liner using Math.ceil:
const quarterOf = (month) => {
    return Math.ceil(month/3)
  }
//just divide by three and get the math.ceil of it