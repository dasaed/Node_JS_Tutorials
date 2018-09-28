/*
In a browser, the JavaScript Global Object is the Window. However, because Node JS is no a browser, the global object in node is an Object called Global. It gives us access to some methods we could use in the global object. A couple examples are:
        __dirname
        __filename
        console
        global
        exports
        setImmediate(callback[,arg][, ...])
        setInterval(callback,delay[,arg][, ...])
        setTimeout(callback,delay[,arg][, ...])
*/
var time = 0;
var timer = setInterval(function(){
    time +=2;
    console.log(time + ' seconds have passed');
if (time > 5){
    clearInterval(timer);
}
},2000);

function function5seconds(){
    console.log('I only appear once, after 5 secconds have passed. ');
}

var time1 = 0;
function function10seconds(){
    console.log('I come out every 10 seconds. So far, '+time1+' seconds have passed');
    time1+=10;
}

console.log('Hey there');
setTimeout(function5seconds, 5000);
setInterval(function10seconds,2000,20000);