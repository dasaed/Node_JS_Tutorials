/*
In a browser, the JavaScript Global Object is the Window. However, because Node JS is no a browser, the global object in node is an Object called Global. It gives us access to some methods we could use in the global object. A couple examples are:
        __dirname
        __filename
        console
        global
        setImmediate(callback[,arg][, ...])
        setInterval(callback,delay[,arg][, ...])
        setTimeout(callback,delay[,arg][, ...])

        How the hell did this thing connect??
*/
function function15seconds(){
    console.log('I only appear once, after 300 secconds have passed. ');
}
setTimeout(function15seconds, 300000);

console.log('Hey there, here is where we are, and the file we are executing');
console.log(__dirname);
console.log(__filename);



// NOW WE ARE GOING TO TALK ABOUT MODULES //
// FUNCTION EXPRESSION: We set a variable equal to a function.
var time = 0;
var timer = setInterval(function(){
    time +=2;
    console.log(time + ' seconds have passed ' + Date());
if (time > 5){
    clearInterval(timer);
}
},2000);
function sayHi(){
    console.log('hi');
}
sayHi();
var sayBye = function(){
    console.log('bye');
};
sayBye();
// we can pass functions from one to another.
function callFunction(fun){
    sayHi();
    fun();
}
callFunction(sayHi);

document.write("hello world")
// MODULES AND REQUIRE //
// A module is essentially another JavaScript file
var counter = require('./count');
console.log(counter(['carlos','dasaed','salcedo','carreno']));
