/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

//Answer
function greet (name, owner) {
    return 'Hello ' + (name === owner ? 'boss' : 'guest')
  }

//do a ternary check to see what to concatencate after hello, but you can also do this in many ways i.e.
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }
//this gives it a clearer return I suppose