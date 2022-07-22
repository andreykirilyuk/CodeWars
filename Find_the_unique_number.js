// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//Answer
function findUniq(arr) {
    let temp = 'abc'
    let firstValue = arr[0]
    let lastValue = arr[arr.length-1]
    
      if(firstValue !== arr[1] && firstValue !== arr[2]){
          temp = arr[0]
        }else if(lastValue !== arr[arr.length-2] && lastValue !== arr[arr.length-3]){
           temp = arr[arr.length-1]
        }else if (temp = 'abc'){
            for (let i=1; i<arr.length-1; i++){
               if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
                temp = arr[i]
                }
              }
        }
    return temp
  }

  
//first check the starting and last values against the next & previous values respectively, then
//if those don't pass we only need to check the middle values in array for uniqueness.

//a much simpler solution would be to simple use the find method for a value where it's first index
//is strictly equal to it's last index.
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}