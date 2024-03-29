/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"

*/

//Answer
function findNeedle(haystack) {
    let needle = haystack.indexOf('needle')
    return `found the needle at position ${needle}`
  }

//use the indexOf method to find the index of the string 'needle', then set it to variable needle
//return the expected string with template literal of `needle`