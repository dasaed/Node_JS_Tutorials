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
var myPI = 3.1;
if (myPI > 3.14) {
  console.log("MyPI is greater than the actual value of pi. MyPI = "+myPI)
} else if (myPI < 3.14){
  console.log("MyPI is less than the actual value of pi. MyPI = "+myPI)
} else {
  console.log("MyPI is close enough to the actual value of pi. MyPI = "+myPI)
}
/////////////////////////////////////////////////////////////////

var age = 5;
while(age <=10 ){
  console.log("Your age is less than 10");
  age++;
}
document.write("you are now over 10");

//////////////////////////////////////////////////////////////////
var links = document.getElementsByTagName("a");
for (i = 0; i <= links.length; i++){
  console.log("this is link number "+i+" "+links[i]);
}

//////////////////////////////////////////////////////////////////
// the "break" and "continue" keywords
for (j = 0; j < 10; j++){
  if (j === 5){
    console.log("We are skipping 5");
    continue;
  }
  console.log(i);

  if (j === 7){
    break;
  }
}
console.log("I've broken out of the loop");

//////////////////////////////////////////////////////////////////
// example of a useful use for loops

var links = document.getElementsByTagName("a");
for (i = 0; i<  links.length; i++){
  links[i].className = "Link-"+i; // we added an id to all links in an ordered list
}
