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

console.log("These are the common operationrs: = assign, + addition, - subtraction, / division, * multiplication");
console.log("These are \"Math Operators Short hand\" - basically, all you have to add is to put the operator before the equal sign (+=, -=, /= and *=) ");
// Now we are going to work with conditionals (booleans)
var iLikeMeat = true; // This is the boolean
iLikeMeat = "true"; // this is the string true
iLikeMeat = false; // now iLikeMeat is boolean again
console.log("Is the variable iLikeMeat equal to true??? "+(iLikeMeat==true));
//Within javascript, 0 and -0 are equal to false. All other numbers would equal to true. for example:
console.log("Within javascript, 0 and -0 are equal to false. All other numbers would equal to true. for example:");
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(100202010120));

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

//////////////////////////////////////////////////////////////////
// introduction to  functions
function getAverage (a,b) {
  var average = (a + b)/2;
  return average;
}

getAverage(67,134);
var myResult = getAverage(1,2);
console.log("");
/////////////////////////////////////////////////////////////////
// lesson 21 variable scope
var foo = 20; // global variable
function myFunction(){
  var bar = 10; // local variable - only works in the function
}
/////////////////////////////////////////////////////////////////
// lesson 22 - working with numbers
var myNumber = 5;
Math.round(7.5);
// lesson 23 - NaN = Not a numbers
var a = 7;
var b = 6;
if (isNaN(a)){
  console.log("That ain't even a number");
} else{
  console.log("The meaning of life is: "+(a*b));
}


/////////////////////////////////////////////////////////////////
// Strings are objects, so they have methods and properties
// for example
var myString = "This is just a cool \"string\"";
console.log("This is the value of myString: "+myString);
console.log("This is the length(num of char) of myString: "+myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log("This is the index of the word \"string\" in myString:  "+myString.indexOf("string"));
console.log("if a word doesn't exist, javascript will return a"+myString.indexOf("ninja"));

if (myString.indexOf("Carlos") == -1){
  console.log("The word Carlos is not in myString variable");
}

console.log("Now lets compare strings");
var string1 = "abc";
var string2 = "ABC";
console.log(string1 === string2);//This is case sensitive
console.log(string1.toLowerCase() === string2.toLowerCase());//This is case sensitive
console.log(string1 > string2);//This is case sensitive
//// slice and dice strings - tutorial 25
var str = "hello, world!";

var str2 =  str.slice(2, 9); //specifies beginning and end
var str3 = str.slice(7); //specifies beginning, but not the end
console.log("str2: "+str2);
console.log("str3: "+str3);
var tags = "meat, ham, salami, pork, beef, chicken";
var tagsArray = tags.split(",");
console.log(tagsArray);
////// javascript arrays - lesson 25

console.log("//////////////// this is the end of test.js //////////////////")



