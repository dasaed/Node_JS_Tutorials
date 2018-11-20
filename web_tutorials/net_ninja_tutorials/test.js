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
var myArray = [];
myArray[0] = 25;
myArray[1] = true;
myArray[2] = "hello";
myArray[3] = "zzz";
myArray[4] = false;
var myArray2 = [10,20,"hi",false];
var myArrayA = [];
var myArrayB = ["we add the elements inside",true,100,"like this"];
//a few methods with arrays
console.log("This is the value of myArra: "+myArray);
console.log("Length of myArray = "+myArray.length);
console.log("myArray in reversed order = "+myArray.reverse());
console.log("myArray in sorted order = "+myArray.sort());

/// side note = knowing how to round a number in JavaScript
function roundToN(num1,num2) {
    return +(Math.round(num1 + "e+"+num2)  + "e-"+num2);
}
var MyPI = roundToN(Math.PI, 3); //returns the value of PI rounded to 3 decimal places
/// end of side note

/////////////// Objects ////////////////// lesson 27 and 28

var myCar = new Object();
myCar.driver = "Carlos";
myCar.speed = 50;
myCar.drivable = true;
myCar.drive = function() {
  console.log(this.name+" is now Driving");
};
myCar.name="mustang";

myCar2 = {
  driver:"Dasaed",
  speed: 50,
  driveable: true,
  drive: function(){
    console.log(this.name+" is now Driving, yay!");
  },
  name: "corvette",
  test: function(){
    console.log(this);
  },
  logDriver: function(){
    console.log("The driver of "+this.name +" is: "+this.driver);
  }
}; // end of myCar2
console.log("First Car: "+myCar.name);
myCar.drive();
console.log("Second Car: "+myCar2.name);
myCar2.drive();
console.log("Now I compare this for an object, vs this for the entire document");
myCar2.test();
console.log(this);
myCar2.logDriver();

/// constructor functions
/// the variable normally starts with a capital letter - lesson 30
var Vehicle = function(name, driver, wheels, maxSpeed, flies, boat ){
  this.name=name;
  this.wheels=wheels;
  this.maxSpeed=maxSpeed;
  this.driver=driver;
  this.logDriver = function(){
    console.log("The driver of "+this.name+" is "+this.driver);
  };
  this.flies = flies;
  this.boat = boat;
};

var motorcycle = new Vehicle("harley","dasa",2,140);
motorcycle.logDriver();


console.log("//// now we are getting into more interesting stuff ////");
console.log("Lesson 31 -  the date object");
var myDate = new Date(); //stores current date
// var AnotherFullDate = new Date (year, month, day, hour, minutes, seconds)
console.log("Today is "+myDate);
var myPastDate =  new Date(1545, 11, 21, 10, 30, 15);
var myFutureDate =  new Date(2145, 10, 1, 10, 30, 40);
console.log(myPastDate);
console.log(myFutureDate);
var birthday = new Date(1991,7,15,6,30,25);//notice that months range from 0 to 11
console.log(birthday);
console.log(birthday.getFullYear());
console.log(birthday.getMonth());
console.log(birthday.getDate()); // the day of the month
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getDay());// the day of the week ranges from 0 to 6, where 0=sunday!
console.log(birthday.getTime()); // gets the number of milliseconds since 1st Jan 1970 (epoch time)

console.log("//////////////// this is the end of test.js //////////////////")
