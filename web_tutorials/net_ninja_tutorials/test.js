document.write("Hello World written in the test.js JavaScript file")

/**
Little rules for JavaScript
1) JavaScript is case sensitive
2) every statement ends with a semicolon, and a statement is basically an action you want JavaScript to do (ie alert message, change background, etc. )
3) White space doesn't matter
4) Comments are done in the same way as in Java
5) JavaScript runs from top to bottom
6) You can store functions in variables, and pass functions into functions
**/

var myVariableCarlos;
myVariableCarlos=10;
myVariableCarlos=10+10;
console.log("myVariableCarlos is equal to: "+myVariableCarlos+". \nJavaScript treats variables similar to python. In other words, you don't have to declare the type of variable. Everything is expressed with just the keyword 'var'");
myVariableCarlos="My names is Carlos"
console.log("Variables can easily change from one type to another and viceversa, depending on how you use them in your code.")

//////////lesson 11 - control flow and if statements ////////////
var thisIsSoBasic = true;
if (thisIsSoBasic) {
  console.log("thisIsSoBasic = "+thisIsSoBasic)
} else {
  console.log("I need to move a little faster")
}
