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
var myPI = function(myPI){
  var temp = 0;
    while(temp < myPI){

    }           // The function returns the product of p1 and p2
}
}

if (myPI > 3.14) {
  console.log("MyPI is greater than the actual value of pi. MyPI = "+myPI)
} else if (myPI < 3.14){
  console.log("MyPI is less than the actual value of pi. MyPI = "+myPI)
} else {
  console.log("MyPI is close enough to the actual value of pi. MyPI = "+myPI)
}
